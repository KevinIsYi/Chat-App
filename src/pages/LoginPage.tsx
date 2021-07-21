import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
    userName: string;
    password: string;
    confirmPassword: string;
}

export const LoginPage = () => {

    const { register, handleSubmit } = useForm<FormValues>();
    const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);

    const toggleExistingAccount = () => {
        setAlreadyHaveAccount(!alreadyHaveAccount);
    }

    const submitForm = (e: FormValues) => {
        console.log(e);
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
                <form
                    autoComplete="off"
                    className="mt-8 space-y-6"
                    onSubmit={handleSubmit(submitForm)}
                >
                    <div className="rounded-md shadow-sm">
                        <input
                            type="text"
                            className="appearance-none mb-4 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"
                            {...register("userName")}
                        />
                        <input
                            type="password"
                            autoComplete="current-password"
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            {...register("password")}
                        />
                        {
                            !alreadyHaveAccount && (
                                <input
                                    type="password"
                                    autoComplete="current-password"
                                    className="appearance-none mt-4 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
