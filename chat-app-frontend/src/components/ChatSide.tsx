import { ChatHeader } from './ChatHeader'
import { ChatInput } from './ChatInput'
import { ChatSection } from './ChatSection'

export const ChatSide = () => {
    return (
        <div className="h-full w-8/12 flex flex-col justify-between shadow">
            <ChatHeader />
            <ChatSection />
            <ChatInput />
        </div>
    )
}
