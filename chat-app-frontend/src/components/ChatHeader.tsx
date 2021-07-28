import { useContext } from "react";
import { MessagesContext } from "../context/messages/MessagesContext";

export const ChatHeader = () => {

    const { messagesState: { contact: { userName, userStatus, online } } } = useContext(MessagesContext);

    return (
        <div className="px-5 py-5 h-24 bg-gray-300 min-96 overflow-auto lg:overflow-hidden">
            {
                userName !== '' && (
                    <div className="flex flex-col justify-items-center items-start">
                        <div className="flex flex-row-reverse items-center gap-1.5">
                            <p className="text-xl font-bold capitalize">{userName}</p>
                            <div className={`${online ? 'bg-green-500' : 'bg-red-500'} rounded-full w-3 h-3`} />
                        </div>
                        <p className="text-gray-800 mr-2 font-bold">Status:
                            <span className="font-light">
                                {' '}{userStatus.length > 75 ? `${userStatus.substr(0, 75)}...` : userStatus}
                            </span>
                        </p>
                    </div>
                )
            }
        </div>
    )
}
