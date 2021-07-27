"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const validate_uid_1 = require("../middlewares/validate-uid");
const verify_jwt_1 = require("../middlewares/verify-jwt");
const router = express_1.Router();
router.post('/change-status', [
    validate_uid_1.validateUID,
    verify_jwt_1.verifyJWT
], user_1.changeUserStatus);
router.get('/get-users', [
    verify_jwt_1.verifyJWT
], user_1.getUsers);
router.get('/:token', user_1.loginWithToken);
module.exports = router;
//# sourceMappingURL=user.js.map