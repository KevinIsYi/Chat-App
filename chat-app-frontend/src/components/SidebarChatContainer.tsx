import React from 'react';
import { SidebarChat } from './SidebarChat';

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
    return (
        <div className="overflow-auto">
            <SidebarChat
                name="Kevin Rodríguez"
                pinned={true}
            />
            {
                people.map((people, index) => (
                    <SidebarChat
                        key={index}
                        name={people}
                    />
                ))
            }
        </div>
    )
}
