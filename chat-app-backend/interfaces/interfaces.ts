import { Request } from "express";
import { JwtPayload } from 'jsonwebtoken';

export interface JWTInterface extends JwtPayload {
    uid: string;
    userName: string;
}

export interface IGetUserAuthInfoRequest extends Request {
    uid: string
}