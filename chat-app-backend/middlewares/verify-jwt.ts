import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IGetUserAuthInfoRequest, JWTInterface } from '../interfaces/interfaces';

const verifyJWT = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.header('x-token');

        if (!token) {
            return res.status(401).json({
                ok: false,
                message: 'Token is required'
            });
        }

        const { uid } = jwt.verify(token, process.env.JWT_KEY!) as JWTInterface;
        req.uid = uid;

        next();

    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token is not valid'
        });
    }
};

module.exports = {
    verifyJWT
}