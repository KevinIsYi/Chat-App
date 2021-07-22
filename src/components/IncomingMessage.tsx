import { ChatInterface } from "../intercaces/interfaces"

export const IncomingMessage = ({ message }: ChatInterface) => {    
    return (
        <div className="rounded self-start w-7/12 bg-gray-100 p-1">
            {message}
            <p className="text-right text-xs">15:34</p>
        </div>
    )
}