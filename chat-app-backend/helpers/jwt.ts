import jwt from 'jsonwebtoken';

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
