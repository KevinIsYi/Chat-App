import { Router } from 'express';
import { createUser, logIn } from '../controllers/auth';
import { validateAuthFields, validatePasswordLength, validateUserNameLength } from '../middlewares/validate-auth-fields';

const router = Router();

router.post(
    '/',
    [
        validateAuthFields,
    ],
    logIn
);


router.post(
    '/new',
    [
        validateAuthFields,
        validatePasswordLength,
        validateUserNameLength
    ],
    createUser
)

module.exports = router;