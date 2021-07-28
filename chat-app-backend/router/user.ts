import { Router } from 'express';
import { changeUserStatus, getUserById, getUsers, loginWithToken } from '../controllers/user';
import { validateUID, validateUIDFromUrl } from '../middlewares/validate-uid';
import { verifyJWT, verifyJWTFromUrl } from '../middlewares/verify-jwt';

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
    [
        verifyJWTFromUrl
    ],
    loginWithToken
);

router.get(
    '/:uid/:token',
    [
        validateUIDFromUrl,
        verifyJWTFromUrl
    ],
    getUserById
);

module.exports = router;