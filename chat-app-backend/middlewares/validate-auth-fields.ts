import { NextFunction, Request, Response } from "express";
import { removeSpaces } from "../helpers/removeSpaces";

export const validateAuthFields = (req: Request, res: Response, next: NextFunction) => {
    const { body: { userName, password } } = req;

    if (!userName || !password) {
        return res.status(400).json({
            ok: false,
            message: 'User Name and Password are required',
        });
    }
    next();
}

export const validatePasswordLength = (req: Request, res: Response, next: NextFunction) => {
    const { body: { password } } = req;

    if (password.length < 6) {
        return res.status(400).json({
            ok: false,
            message: 'Password must have at least 6 characters',
        });
    }

    next();
}

export const validateUserNameLength = (req: Request, res: Response, next: NextFunction) => {
    const { body: { userName } } = req;

    if (userName.legth > 25) {
        return res.status(400).json({
            ok: false,
            message: 'User Name cannot have more than 25 characters' 
        });
    }

    req.body.userName = removeSpaces(userName);

    next();
}
