import { Router } from 'express';
import { changeUserStatus } from '../controllers/user';
import { validateUID } from '../middlewares/validate-uid';
import { verifyJWT } from '../middlewares/verify-jwt';
import { validateBodyData } from '../middlewares/validate-auth-fields';

const router = Router();

router.post(
    '/change-status',
    [
        validateBodyData,
        validateUID,
        verifyJWT
    ],
    changeUserStatus
);

module.exports = router;