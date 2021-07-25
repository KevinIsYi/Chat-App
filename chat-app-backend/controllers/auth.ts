import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/User';
import { generateJWT } from '../helpers/jwt';

export const createUser = async (req: Request, res: Response) => {
    try {
        
        const { body: { data: { userName, password } } } = req;

        const userExist = await User.findOne({ userName });

        if (userExist) {
            return res.status(400).json({
                ok: false,
                message: 'User already exist'
            });
        }

        const user = new User({ userName, password });
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        const token = await generateJWT(user.uid);

        await user.save();

        return res.status(201).json({
            ok: true,
            message: 'User has been created',
            data: {
                user,
                token
            }
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with the Admin',
            data: {}
        });
    }
}

export const logIn = async (req: Request, res: Response) => {
    try {
        const { body: { data: { userName, password } } } = req;
        const userDB = await User.findOne({ userName });

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                message: 'Email or User Name is not correct',
                data: {}
            });
        }

        const isValidPassword = bcryptjs.compareSync(password, userDB.password);

        if (!isValidPassword) {
            return res.status(404).json({
                ok: false,
                message: 'Email or User Name is not correct',
                data: {}
            });
        }

        const token = await generateJWT(userDB.id);

        return res.json({
            ok: true,
            message: 'Ok',
            data: {
                user: userDB,
                token
            }
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred, talk with the admin',
            data: {}
        });
    }
}
