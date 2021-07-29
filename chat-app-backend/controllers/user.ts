import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { getUIDFromToken } from '../helpers/jwt';
import User from '../models/User';

export const changeUserStatus = async (payload: { uid: string, newStatus: string }) => {
    try {
        const { uid, newStatus } = payload;

        await User.findByIdAndUpdate(uid, {
            userStatus: newStatus
        });

    } catch (error) {
        console.log(error);
        
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();

        return res.json({
            ok: true,
            message: 'Success',
            users
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Failed at fetching users. Contact an admin',
        });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { params: { uid } } = req;
        const user = await User.findById(uid);

        return res.json({
            ok: true,
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with an admin'
        });
    }
}


export const loginWithToken = async (req: Request, res: Response) => {
    try {
        const { params: { token } } = req;
        const { ok, uid } = getUIDFromToken(token);

        if (!ok || !isValidObjectId(uid)) {
            return res.status(400).json({
                ok: false,
                message: 'Token is not valid'
            });
        }

        const user = await User.findById(uid);

        if (user) {
            return res.json({
                ok: true,
                user
            });
        }

        return res.status(400).json({
            ok: false,
            message: 'Token is not valid'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with an admin'
        });
    }
}

export const toggleOnlineStatus = async (uid: string, newStatus: boolean) => {

    console.log(`Me piden cambiar el usuario ${uid} a: ${newStatus}`);

    try {
        await User.findByIdAndUpdate(uid, {
            online: newStatus
        });
    } catch (error) {
        console.log(error);
    }
}
