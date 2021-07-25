"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUID = void 0;
const mongoose_1 = require("mongoose");
const validateUID = (req, res, next) => {
    const { body: { data } } = req;
    let message = `A valid UID is re`;
    if (data) {
        const { uid } = data;
        if (uid) {
            if (mongoose_1.isValidObjectId(uid)) {
                return next();
            }
        }
        message = 'A valid UID is required';
    }
    else {
        message = 'Data field is required';
    }
    return res.status(400).json({
        ok: false,
        message
    });
};
exports.validateUID = validateUID;
//# sourceMappingURL=validate-uid.js.map