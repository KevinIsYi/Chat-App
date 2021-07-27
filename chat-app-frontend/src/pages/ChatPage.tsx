import { ChatSide } from "../components/ChatSide"
import { Sidebar } from "../components/Sidebar"
import { MessagesProvider } from "../context/messages/MessagesContext"
import { SocketProvider } from "../context/SocketContext"
import { UsersProvider } from "../context/users/UsersContext"

export const ChatPage = () => {
    return (
        <div className="h-screen mx-auto bg-gray-800 lg:px-20">
            <div className="flex space-between h-screen bg-white shadow-lg">
                <UsersProvider>
                    <MessagesProvider>
                        <SocketProvider>
                            <Sidebar />
                            <ChatSide />
                        </SocketProvider>
                    </MessagesProvider>
                </UsersProvider>
            </div>
        </div>
    )
}
