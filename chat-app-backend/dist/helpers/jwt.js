"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUIDFromToken = exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                reject('Could not generate JWT');
                console.log(err);
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
const getUIDFromToken = (token) => {
    try {
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
        return {
            ok: true,
            uid
        };
    }
    catch (error) {
        return {
            ok: false,
            uid: null
        };
    }
};
exports.getUIDFromToken = getUIDFromToken;
//# sourceMappingURL=jwt.js.map