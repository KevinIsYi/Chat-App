import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from 'mongoose';

export const validateUID = (req: Request, res: Response, next: NextFunction) => {
    const { body: { uid } } = req;
    let message = `A valid UID is required`;

    if (!uid || !isValidObjectId(uid)) {
        return res.status(400).json({
            ok: false,
            message,
        });
    }

    next();
}
