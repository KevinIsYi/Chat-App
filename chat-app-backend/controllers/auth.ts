import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/User';
import { generateJWT } from '../helpers/jwt';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { body: { userName, password } } = req;

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
            user,
            token
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with the Admin'
        });
    }
}