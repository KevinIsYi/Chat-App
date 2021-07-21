import { ChatHeader } from "../components/ChatHeader"
import { ChatInput } from "../components/ChatInput"
import { Sidebar } from "../components/Sidebar"

export const ChatPage = () => {
    return (
        <div className="h-screen mx-auto bg-gray-800 md:px-20">
            <div className="flex space-between h-screen bg-white shadow-lg">
                <Sidebar />
                <div className="w-8/12 flex flex-col justify-between shadow">
                    <ChatHeader />
                    <ChatInput />
                </div>
            </div>
        </div>
    )
}
