"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePasswordLength = exports.validateAuthFields = void 0;
const validateAuthFields = (req, res, next) => {
    const { body: { userName, password } } = req;
    if (!userName || !password) {
        return res.status(400).json({
            ok: false,
            message: 'User Name and Password are required'
        });
    }
    next();
};
exports.validateAuthFields = validateAuthFields;
const validatePasswordLength = (req, res, next) => {
    const { body: { password } } = req;
    if (password.length < 6) {
        return res.status(400).json({
            ok: false,
            message: 'Password must have at least 6 characters'
        });
    }
    next();
};
exports.validatePasswordLength = validatePasswordLength;
//# sourceMappingURL=validate-auth-fields.js.map