import { Request, Response } from 'express';
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
