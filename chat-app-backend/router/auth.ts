import { Router } from 'express';
import { createUser } from '../controllers/auth';
import { validateAuthFields, validatePasswordLength } from '../middlewares/validate-auth-fields';

const router = Router();

// router.post(
//     '/',
//     [

//     ],
//     login
// );


router.post(
    '/new',
    [
        validateAuthFields,
        validatePasswordLength
    ],
    createUser    
)

module.exports = router;