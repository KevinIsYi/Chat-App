import { ChatInterface } from "../intercaces/interfaces"

export const OutgoingMessage = ({ message }: ChatInterface) => {
    return (
        <div className="rounded self-end w-7/12 bg-gray-300 p-1">
            {message}
            <p className="text-right text-xs">15:34</p>
        </div>
    )
}