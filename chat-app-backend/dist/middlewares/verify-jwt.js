"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJWT = (req, res, next) => {
    try {
        const token = req.header('x-token');
        if (!token) {
            return res.status(401).json({
                ok: false,
                message: 'Token is required'
            });
        }
        jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
        next();
    }
    catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token is not valid'
        });
    }
};
exports.verifyJWT = verifyJWT;
//# sourceMappingURL=verify-jwt.js.map