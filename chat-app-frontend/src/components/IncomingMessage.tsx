import { Message } from "../interfaces/interfaces";

export const IncomingMessage = ({ message, createdAt }: Message) => {

    console.log(new Date(createdAt));

    

    return (
        <div className="rounded self-start w-7/12 bg-gray-100 p-1">
            {message}
            <p className="text-right text-xs">15:34</p>
        </div>
    )
}