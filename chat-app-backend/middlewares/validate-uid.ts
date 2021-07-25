import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from 'mongoose';

export const validateUID = (req: Request, res: Response, next: NextFunction) => {
    const { body: { data } } = req;
    let message = `A valid UID is re`;

    if (data) {
        const { uid } = data;

        if (uid) {
            if (isValidObjectId(uid)) {
                return next();
            }
        }

        message = 'A valid UID is required';
    }
    else {
        message = 'Data field is required';
    }

    return res.status(400).json({
        ok: false,
        message
    });
}