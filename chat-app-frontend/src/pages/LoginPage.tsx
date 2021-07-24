import { useAuthValidation } from "../hooks/useAuthValidation";

export const LoginPage = () => {

    const {
        alreadyHaveAccount,
        confirmPasswordError,
        errorMessage,
        passwordError,
        userNameError,
        handleSubmit,
        register,
        submitForm,
        toggleExistingAccount,
    } = useAuthValidation();

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
