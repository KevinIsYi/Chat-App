import { NextFunction, Request, Response } from "express";

export const validateAuthFields = (req: Request, res: Response, next: NextFunction) => {
    const { body: { data: { userName, password } } } = req;

    if (!userName || !password) {
        console.log("Entra al if");

        return res.status(400).json({
            ok: false,
            message: 'User Name and Password are required',
            data: {}
        });
    }
    next();
}

export const validatePasswordLength = (req: Request, res: Response, next: NextFunction) => {
    const { body: { data: { password } } } = req;

    if (password.length < 6) {
        return res.status(400).json({
            ok: false,
            message: 'Password must have at least 6 characters',
            data: {}
        });
    }

    next();
}