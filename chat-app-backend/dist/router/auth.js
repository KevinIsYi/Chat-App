"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validate_auth_fields_1 = require("../middlewares/validate-auth-fields");
const router = express_1.Router();
// router.post(
//     '/',
//     [
//     ],
//     login
// );
router.post('/new', [
    validate_auth_fields_1.validateAuthFields,
    validate_auth_fields_1.validatePasswordLength
], auth_1.createUser);
module.exports = router;
//# sourceMappingURL=auth.js.map