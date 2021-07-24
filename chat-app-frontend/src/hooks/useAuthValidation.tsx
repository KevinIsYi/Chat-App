import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authFetch } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

interface FormErrors {
    errorMessage: string | false;
    confirmPasswordError: boolean;
    passwordError: boolean;
    userNameError: boolean;
}

interface FormValues {
    userName: string;
    password: string;
    confirmPassword: string;
}

export const useAuthValidation = () => {
    const { signIn } = useContext(AuthContext);
    const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(true);
    const [formErrors, setFormErrors] = useState<FormErrors>({
        errorMessage: false,
        confirmPasswordError: false,
        passwordError: false,
        userNameError: false,
    });
    const { register, handleSubmit } = useForm<FormValues>();

    const toggleExistingAccount = () => {
        setAlreadyHaveAccount(!alreadyHaveAccount);
    }

    const dispatchSignIn = async (userName: string, password: string, endpoint: "/auth" | "/auth/new") => {
        const { ok, message, data } = await authFetch(userName, password, endpoint);

        if (ok) {
            const { user, token } = data;
            signIn(user, token);
        }
        else {
            setFormErrors({
                confirmPasswordError: false,
                errorMessage: message,
                passwordError: true,
                userNameError: true,
            });
        }
    }

    const submitForm = async (e: FormValues) => {

        const { userName, password, confirmPassword } = e;

        if (alreadyHaveAccount) {
            dispatchSignIn(userName, password, '/auth');
        }
        else {
            if (userName.length < 5) {
                setFormErrors({
                    ...formErrors,
                    errorMessage: 'User Name must have at least 5 characters',
                    userNameError: true,
                });
            }
            else if (password.length < 5) {
                setFormErrors({
                    ...formErrors,
                    errorMessage: 'Password must have at least 5 characters',
                    passwordError: true,
                });
            }
            else if (password !== confirmPassword) {
                setFormErrors({
                    ...formErrors,
                    errorMessage: 'Your passwords do not match',
                    confirmPasswordError: false,
                    passwordError: false,
                });
            }
            else {
                dispatchSignIn(userName, password, '/auth/new');
            }
        }
    }

    return {
        alreadyHaveAccount,
        handleSubmit,
        toggleExistingAccount,
        submitForm,
        register,
        ...formErrors
    }
}
