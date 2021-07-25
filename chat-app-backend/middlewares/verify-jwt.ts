import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('x-token');

        if (!token) {
            return res.status(401).json({
                ok: false,
                message: 'Token is required'
            });
        }

        jwt.verify(token, process.env.JWT_KEY!);

        next();

    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token is not valid'
        });
    }
};
