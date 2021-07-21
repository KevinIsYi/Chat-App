import { useForm } from "react-hook-form";
import { IoSendSharp } from "react-icons/io5";

interface FormValues {
    message: string;
}

export const ChatInput = () => {

    const { register, handleSubmit, setValue } = useForm<FormValues>();

    const sendMessage = (e: FormValues) => {
        const { message } = e;
        console.log(message);

        setValue('message', '');
    }

    return (
        <div className="h-16 bg-gray-200 shadow">
            <form
                className="flex items-center mx-4 h-full gap-2"
                onSubmit={handleSubmit(sendMessage)}
            >
                <input
                autoComplete="off"
                    className="text-white bg-gray-900 w-full outline-none p-3 rounded-full"
                    placeholder="Your message"
                    type="text"
                    {...register("message")}
                />

                <button type="submit">
                    <IoSendSharp className="text-2xl text-red-500 cursor-pointer" />
                </button>
            </form>
        </div>
    )
}
