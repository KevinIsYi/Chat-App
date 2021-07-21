import { Sidebar } from "../components/Sidebar"

export const ChatPage = () => {
    return (
        <div className="h-screen mx-auto md:px-20">
            <div className="flex space-between h-screen bg-white shadow-lg">
                <Sidebar />
                <div className="w-8/12 shadow">
                    Chat
                </div>
            </div>
        </div>
    )
}
