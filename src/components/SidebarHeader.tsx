import { useContext } from "react"
import { AuthContext } from '../context/AuthContext';
import { ChatStatus } from "./ChatStatus";

export const SidebarHeader = () => {

    const { authState: { userName }, logOut } = useContext(AuthContext);

    return (
        <div className="flex justify-between items-center px-5 py-5 h-24 bg-gray-300 min-96 overflow-auto lg:overflow-hidden">
            <div className="flex flex-col flex-start items-start">
                <div className="flex flex-row-reverse items-center gap-1.5 overflow-auto">
                    <p className="text-xl font-bold">{userName}</p>
                    <div className="rounded-full bg-red-500 w-3 h-3" />
                </div>
                <ChatStatus />
            </div>
            <button
                className="transition duration-300 font-bold text-red-500 hover:text-red-600 w-20"
                onClick={logOut}
            >
                Log Out
            </button>
        </div>
    )
}
