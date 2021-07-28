import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoSendSharp } from "react-icons/io5";
import { SocketContext } from '../context/SocketContext';
import { AuthContext } from '../context/auth/AuthContext';
import { MessagesContext } from '../context/messages/MessagesContext';

interface FormValues {
    message: string;
}

export const ChatInput = () => {

    const { register, handleSubmit, setValue } = useForm<FormValues>();
    const { socket } = useContext(SocketContext);
    const { authState: { user: { uid } } } = useContext(AuthContext);
    const { messagesState: { contact: { uid: activeChatUid } } } = useContext(MessagesContext);

    const sendMessage = (e: FormValues) => {
        const { message } = e;
        

        socket?.emit('one-to-one-message', {
            from: uid,
            to: activeChatUid,
            message
        });

        setValue('message', '');
    }

    return (
        <div className="py-2 md:p-5 h-16 bg-gray-200 shadow">
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
