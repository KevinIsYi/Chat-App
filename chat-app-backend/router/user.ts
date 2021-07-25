import { Router } from 'express';
import { changeUserStatus } from '../controllers/user';
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

module.exports = router;