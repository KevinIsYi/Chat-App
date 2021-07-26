import jwt, { JwtPayload } from 'jsonwebtoken';
import { isValidObjectId } from 'mongoose';

export const generateJWT = (uid: string) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
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

interface JWTInterface extends JwtPayload {
    uid: string;
}

export const getUIDFromToken = (token: string): { ok: boolean, uid: string | null } => {
    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY!) as JWTInterface;

        if (isValidObjectId(uid)) {
            return {
                ok: true,
                uid
            }
        }
        else {
            return {
                ok: false,
                uid: null
            }
        }

    } catch (error) {
        return {
            ok: false,
            uid: null
        }
    }
}