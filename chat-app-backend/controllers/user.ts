import { Request, Response } from 'express';
import { isValidObjectId, ObjectId } from 'mongoose';
import { getUIDFromToken } from '../helpers/jwt';
import User from '../models/User';

export const changeUserStatus = async (req: Request, res: Response) => {
    try {
        const { body: { uid, userStatus } } = req;

        if (!userStatus) {
            return res.status(400).json({
                ok: false,
                message: 'New User Status was not provided as needed'
            });
        }

        const userDB = await User.findByIdAndUpdate(uid, { userStatus }, { useFindAndModify: false });

        if (userDB) {
            return res.json({
                ok: true,
                message: 'User status has beed updated'
            });
        }

        return res.status(404).json({
            ok: false,
            message: 'User ID not found'
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Contact an admin'
        });
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

export const getUserById = async (uid: string) => {
    try {
        return await User.findById(uid);
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const loginWithToken = async (req: Request, res: Response) => {
    try {
        const { params: { token } } = req;

        if (!token) {
            return res.status(400).json({
                ok: false,
                message: 'Token is required'
            });
        }

        const { ok, uid } = getUIDFromToken(token);

        if (!ok || !isValidObjectId(uid)) {
            return res.status(400).json({
                ok: false,
                message: 'Token is not valid'
            });
        }

        const user = await getUserById(uid!);

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
