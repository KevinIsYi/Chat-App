import { Router } from 'express';
import { changeUserStatus, getUsers, loginWithToken } from '../controllers/user';
import { validateUID } from '../middlewares/validate-uid';
import { verifyJWT } from '../middlewares/verify-jwt';

const router = Router();

router.post(
    '/change-status',
    [
        validateUID,
        verifyJWT
    ],
    changeUserStatus
);

router.get(
    '/get-users',
    [
        verifyJWT
    ],
    getUsers
);

router.get(
    '/:token',
    loginWithToken
);

module.exports = router;