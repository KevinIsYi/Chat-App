import { ChatSide } from "../components/ChatSide"
import { Sidebar } from "../components/Sidebar"

export const ChatPage = () => {
    return (
        <div className="h-screen mx-auto bg-gray-800 md:px-20">
            <div className="flex space-between h-screen bg-white shadow-lg">
                <Sidebar />
                <ChatSide />
            </div>
        </div>
    )
}
