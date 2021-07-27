import { useContext } from "react";
import { MessagesContext } from "../context/messages/MessagesContext";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { AuthContext } from '../context/auth/AuthContext';

export const ChatSection = () => {

    const { messagesState: { messages } } = useContext(MessagesContext);
    const { authState: { user: { uid } } } = useContext(AuthContext);

    return (
        <div id="chat-container" className="p-5 mb-2 flex flex-grow flex-col overflow-auto gap-2">
            {
                messages.map((message) => (
                    message.from === uid ? (
                        <OutgoingMessage key={message._id} {...message} />
                    ) : (
                        <IncomingMessage key={message._id} {...message} />
                    )
                ))
            }

        </div>
    )
}
