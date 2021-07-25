"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUID = void 0;
const mongoose_1 = require("mongoose");
const validateUID = (req, res, next) => {
    const { body: { data: { uid } } } = req;
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
//# sourceMappingURL=validate-uid.js.map