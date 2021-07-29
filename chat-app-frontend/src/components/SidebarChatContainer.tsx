import { useContext } from 'react';
import { SidebarChat } from './SidebarChat';
import { UsersContext } from '../context/users/UsersContext';
import { AuthContext } from '../context/auth/AuthContext';

export const SidebarChatContainer = () => {

    const { authState: { user: { uid: userUid } } } = useContext(AuthContext);
    const { users } = useContext(UsersContext);

    return (
        <div className="overflow-auto">
            {
                users.map(({ uid, online, userName, isPinned }) => (

                    <>
                        {
                            userUid !== uid && (
                                <SidebarChat
                                    key={uid}
                                    uid={uid}
                                    online={online}
                                    userName={userName}
                                    isPinned={isPinned}
                                />

                            )
                        }
                    </>
                ))
            }
        </div>
    )
}
