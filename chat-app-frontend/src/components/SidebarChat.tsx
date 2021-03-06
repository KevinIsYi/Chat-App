import React, { useContext } from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import { AuthContext } from '../context/auth/AuthContext';
import { MessagesContext } from '../context/messages/MessagesContext';

interface Props {
    uid: string;
    isPinned: boolean;
    online: boolean;
    userName: string;
}

export const SidebarChat = React.memo(({ uid, online, userName, isPinned }: Props) => {

    const { authState: { user: { uid: userUid } } } = useContext(AuthContext);
    const { messagesState: { contact: { uid: activeChatUid } }, changeActiveChatUID } = useContext(MessagesContext);

    const selectChat = () => {
        changeActiveChatUID(uid);
    }

    if (uid === userUid) {
        return null;
    }

    return (
        <div
            className={`${activeChatUid === uid ? 'bg-gray-200 hover:bg-gray-400' : 'hover:bg-gray-200'} transition duration-500 cursor-pointer px-5 py-3 shadow capitalize flex justify-between w-screen md:w-full`}
            onClick={selectChat}
        >
            {
                isPinned ? (
                    <div className="flex items-center gap-2">
                        <AiFillPushpin className="text-xl" />
                        <div>
                            <p className="text-xl font-bold">{userName}</p>
                            <p className="text-sm text-gray-700">Last Message</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-xl font-bold">{userName}</p>
                        <p className="text-sm text-gray-700">Last Message</p>
                    </div>
                )
            }
            <div className="flex flex-col gap-y-1.5 items-end">
                <p className="text-sm text-gray-700">14:54</p>
                <div className={`rounded-full ${online ? 'bg-green-500' : 'bg-red-500'} w-3 h-3`} />
            </div>
        </div>
    )
})
