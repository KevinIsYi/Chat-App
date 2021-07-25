import { ChatSide } from "../components/ChatSide"
import { Sidebar } from "../components/Sidebar"
import { UsersProvider } from "../context/users/UsersContext"

export const ChatPage = () => {
    return (
        <div className="h-screen mx-auto bg-gray-800 lg:px-20">
            <div className="flex space-between h-screen bg-white shadow-lg">
                <UsersProvider>
                    <Sidebar />
                    <ChatSide />
                </UsersProvider>
            </div>
        </div>
    )
}
