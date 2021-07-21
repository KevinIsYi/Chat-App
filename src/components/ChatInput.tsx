import { IoSendSharp } from "react-icons/io5";

export const ChatInput = () => {
    return (
        <div className="h-16 bg-gray-200 shadow">
            <div className="flex items-center mx-4 h-full gap-2">
                <input
                    type="text"
                    className="text-white bg-gray-900 w-full outline-none p-3 rounded-full"
                    placeholder="Your message"
                />

                <IoSendSharp className="text-2xl text-red-500" />
            </div>
        </div>
    )
}
