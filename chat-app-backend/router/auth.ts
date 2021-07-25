import { Router } from 'express';
import { createUser, logIn } from '../controllers/auth';
import { validateAuthFields, validateBodyData, validatePasswordLength } from '../middlewares/validate-auth-fields';

const router = Router();

router.post(
    '/',
    [
        validateBodyData,
        validateAuthFields,
    ],
    logIn
);


router.post(
    '/new',
    [
        validateBodyData,
        validateAuthFields,
        validatePasswordLength
    ],
    createUser
)

module.exports = router;