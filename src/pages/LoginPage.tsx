import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../context/AuthContext';

interface FormValues {
    userName: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    errorMessage: string | false;
    confirmPasswordError: boolean;
    passwordError: boolean;
    userNameError: boolean;
}

export const LoginPage = () => {

    const { signIn, createAccount } = useContext(AuthContext);
    const { register, handleSubmit } = useForm<FormValues>();
    const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);
    const [formErrors, setFormErrors] = useState<FormErrors>({
        errorMessage: false,
        confirmPasswordError: false,
        passwordError: false,
        userNameError: false,
    });

    const { errorMessage, confirmPasswordError, passwordError, userNameError } = formErrors;

    const toggleExistingAccount = () => {
        setAlreadyHaveAccount(!alreadyHaveAccount);
    }

    const submitForm = (e: FormValues) => {

        const { userName, password, confirmPassword } = e;

        if (alreadyHaveAccount) {
            signIn({
                userName,
                userPassword: password,
            });
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
                createAccount({
                    userName,
                    userPassword: password,
                });
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 shadow-2xl p-5">
                <div>
                    <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {alreadyHaveAccount ? 'Sign in to your account' : 'Create a new account'}
                    </h2>
                </div>
                {
                    errorMessage && (
                        <p className="text-red-500 text-center">{errorMessage}</p>
                    )
                }
                <form
                    autoComplete="off"
                    className="mt-8 space-y-6"
                    onSubmit={handleSubmit(submitForm)}
                >
                    <div className="rounded-md shadow-sm">
                        <input
                            type="text"
                            className={`${userNameError ? 'border-red-400' : 'border-gray-300'} appearance-none mb-4 relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="User Name"
                            {...register("userName")}
                        />
                        <input
                            type="password"
                            autoComplete="current-password"
                            className={`${passwordError ? 'border-red-400' : 'border-gray-300'} appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="Password"
                            {...register("password")}
                        />
                        {
                            !alreadyHaveAccount && (
                                <input
                                    type="password"
                                    autoComplete="current-password"
                                    className={`${confirmPasswordError ? 'border-red-400' : 'border-gray-300'} appearance-none mt-4 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                    placeholder="Confirm Password"
                                    {...register("confirmPassword")}
                                />
                            )
                        }
                    </div>
                    <p
                        className="font-medium text-sm text-indigo-600 hover:text-indigo-500 text-right block cursor-pointer"
                        onClick={toggleExistingAccount}
                    >
                        Already have Account?
                    </p>
                    <button type="submit" className="transition duration-700 uppercase font-bold group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {alreadyHaveAccount ? 'Sign In' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    )
}
