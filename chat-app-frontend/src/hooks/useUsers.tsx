import { useCallback, useEffect, useState } from "react";
import { getAllUsers } from "../api/user";
import { User } from "../interfaces/interfaces";

export const useUsers = (token: string) => {
    const [users, setUsers] = useState<User[]>([]);

    const updateUsersState = useCallback(() => {
        setUsers([]);
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            const { ok, users } = await getAllUsers(token);

            if (ok) {
                setUsers(users);
            }
        }

        fetchUsers();
    }, [token]);

    const updateUsersConnections = useCallback((uid: string, newStatus: boolean) => {

        setUsers(users => users.map((user) => {
            const { uid: currentId } = user;

            if (currentId === uid) {
                return {
                    ...user,
                    online: newStatus
                }
            }
            else {
                return user;
            }
        }));
    }, []);

    return {
        users,
        updateUsersState,
        updateUsersConnections
    }
}
