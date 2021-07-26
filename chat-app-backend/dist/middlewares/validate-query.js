"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryParams = void 0;
const validateQueryParams = (req, res, next) => {
    const { query } = req;
    if (!query) {
        return res.status(400).json({
            ok: false,
            message: 'Query Params are Required'
        });
    }
    const { from, to } = query;
    if (!from || !to) {
        return res.status(400).json({
            ok: false,
            message: '"UID", "From" and "To" are required on query'
        });
    }
    next();
};
exports.validateQueryParams = validateQueryParams;
//# sourceMappingURL=validate-query.js.map