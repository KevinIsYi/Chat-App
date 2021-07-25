import { NextFunction, Request, Response } from "express";

export const validateAuthFields = (req: Request, res: Response, next: NextFunction) => {
    const { body: { data: { userName, password } } } = req;

    if (!userName || !password) {
        return res.status(400).json({
            ok: false,
            message: 'User Name and Password are required',
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
        });
    }

    next();
}

export const validateBodyData = (req: Request, res: Response, next: NextFunction) => {
    const { body: { data } } = req;

    if (!data) {
        return res.status(400).json({
            ok: false,
            message: 'Data field is required',
        });
    }

    next();
}