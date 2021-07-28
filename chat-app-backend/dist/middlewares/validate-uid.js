"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUIDFromUrl = exports.validateUID = void 0;
const mongoose_1 = require("mongoose");
const validateUID = (req, res, next) => {
    const { body: { uid } } = req;
    let message = `A valid UID is required`;
    if (!uid || !mongoose_1.isValidObjectId(uid)) {
        return res.status(400).json({
            ok: false,
            message,
        });
    }
    next();
};
exports.validateUID = validateUID;
const validateUIDFromUrl = (req, res, next) => {
    const { params: { uid } } = req;
    if (!uid || !mongoose_1.isValidObjectId(uid)) {
        return res.status(400).json({
            ok: false,
            message: 'A valid UID is required'
        });
    }
    next();
};
exports.validateUIDFromUrl = validateUIDFromUrl;
//# sourceMappingURL=validate-uid.js.map