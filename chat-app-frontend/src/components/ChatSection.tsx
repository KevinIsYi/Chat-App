import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";

export const ChatSection = () => {

    const messages = [
        'This is a test message',
        'This is a test message This is a test message ',
        'This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        'This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message This is a test message',
        
    ];

    return (
        <div id="chat-container" className="p-5 mb-2 flex flex-grow flex-col overflow-auto gap-2">
                {
                    messages.map((message, index) => (
                        (index % 2 === 0) ? (
                            <IncomingMessage key={index} message={message} />
                        ) : (
                            <OutgoingMessage key={index} message={message} />
                        )
                    ))
                }

        </div>
    )
}
