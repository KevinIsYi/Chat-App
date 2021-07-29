import { useContext } from 'react';
import { SidebarChat } from './SidebarChat';
import { UsersContext } from '../context/users/UsersContext';

export const SidebarChatContainer = () => {

    const { users } = useContext(UsersContext);

    return (
        <div className="overflow-auto">
            {
                users.map(({ uid, online, userName, isPinned }) => (
                    <SidebarChat
                        key={uid}
                        uid={uid}
                        online={online}
                        userName={userName}
                        isPinned={isPinned}
                    />
                ))
            }
        </div>
    )
}
