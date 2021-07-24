import jwt from 'jsonwebtoken';
import { JWTInterface } from '../interfaces/interfaces';

export const generateJWT = (uid: string) => {
    return new Promise((resolve, reject) => {
        const payload = { uid }
        jwt.sign(payload, process.env.JWT_KEY!, {
            expiresIn: '24h'
        }, (err, token) => {
                if (err) {
                    reject('Could not generate JWT');
                    console.log(err);
                }
                else {
                    resolve(token);
                }
            }
        );
    });
};

export const getUIDFromToken = (token: string) => {
    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY!) as JWTInterface;

        return {
            ok: true,
            uid
        }

    } catch (error) {
        return {
            ok: false,
            uid: null
        }
    }
}