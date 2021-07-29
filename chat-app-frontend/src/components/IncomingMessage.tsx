import { Message } from "../interfaces/interfaces";

export const IncomingMessage = ({ _id, message, createdAt }: Message) => {

    const date = new Date(createdAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const creationHour = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    return (
        <div className="rounded self-start w-7/12 bg-gray-100 p-1">
            {message}
            <p className="text-right text-xs">{creationHour}</p>
        </div>
    )
}