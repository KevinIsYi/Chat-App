"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_1 = require("../controllers/messages");
const validate_query_1 = require("../middlewares/validate-query");
const verify_jwt_1 = require("../middlewares/verify-jwt");
const router = express_1.Router();
router.get('/', [
    validate_query_1.validateQueryParams,
    verify_jwt_1.verifyJWT
], messages_1.getMessages);
module.exports = router;
//# sourceMappingURL=messages.js.map