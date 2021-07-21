import { SidebarChatContainer } from "./SidebarChatContainer"
import { SidebarHeader } from "./SidebarHeader"

export const Sidebar = () => {

    return (
        <div className="w-4/12 flex flex-col shadow">
            <SidebarHeader />
            <SidebarChatContainer />
        </div>
    )
}
