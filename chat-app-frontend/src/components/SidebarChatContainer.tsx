import { useContext } from 'react';
import { SidebarChat } from './SidebarChat';
import { AuthContext } from '../context/AuthContext';
import { useGetUsers } from '../hooks/useGetUsers';

const people = [
    "Kevin",
    "Iván",
    "Rodríguez",
    "García",
    "Del Monte",
    "Ocampo",
    "Salcedo",
    "Manolo",
    "Lama",
    "Lamita",
]

export const SidebarChatContainer = () => {

    const { authState: { token } } = useContext(AuthContext);
    const { users } = useGetUsers(token);

    return (
        <div className="overflow-auto">
            {/* <SidebarChat
                name="Kevin Rodríguez"
                pinned={true}
            /> */}
            {
                users.map(({ uid, online, userName }) => (
                    <SidebarChat
                        key={uid}
                        online={online}
                        userName={userName}

                    />
                ))
            }
        </div>
    )
}
