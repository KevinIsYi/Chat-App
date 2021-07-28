import { useContext } from "react";
import { MessagesContext } from "../context/messages/MessagesContext";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { AuthContext } from '../context/auth/AuthContext';

export const ChatSection = () => {

    const { messagesState: { messages, contact: { userName } } } = useContext(MessagesContext);
    const { authState: { user: { uid } } } = useContext(AuthContext);

    const initialMessage = () => {
        const message = userName === '' ? (
            <h1>Select a conversation</h1>
        ) : (
            <h1>You can start with: <span className="capitalize font-bold">Hi, {userName}!</span></h1>
        );

        return (
            <div className="flex bg-green-300 text-gray-600 rounded p-2 justify-items-center items-center m-auto text-white">
                {message}
            </div>
        );
    }

    return (
        <div id="chat-container" className="p-5 mb-2 flex flex-grow flex-col overflow-auto gap-2">

            {
                messages.length === 0 ? (
                    initialMessage()
                ) : (
                    messages.map((message) => (
                        message.from === uid ? (
                            <OutgoingMessage key={message._id} {...message} />
                        ) : (
                            <IncomingMessage key={message._id} {...message} />
                        )
                    ))
                )
            }
        </div>
    )
}
