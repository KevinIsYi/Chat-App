"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserNameLength = exports.validatePasswordLength = exports.validateAuthFields = void 0;
const removeSpaces_1 = require("../helpers/removeSpaces");
const validateAuthFields = (req, res, next) => {
    const { body: { userName, password } } = req;
    if (!userName || !password) {
        return res.status(400).json({
            ok: false,
            message: 'User Name and Password are required',
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
            message: 'Password must have at least 6 characters',
        });
    }
    next();
};
exports.validatePasswordLength = validatePasswordLength;
const validateUserNameLength = (req, res, next) => {
    const { body: { userName } } = req;
    if (userName.legth > 25) {
        return res.status(400).json({
            ok: false,
            message: 'User Name cannot have more than 25 characters'
        });
    }
    req.body.userName = removeSpaces_1.removeSpaces(userName);
    next();
};
exports.validateUserNameLength = validateUserNameLength;
//# sourceMappingURL=validate-auth-fields.js.map