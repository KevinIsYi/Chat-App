import { useCallback, useEffect, useState } from "react";
import { getAllUsers } from "../api/user";
import { User } from "../interfaces/interfaces";

export const useUsers = (token: string) => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const { ok, users } = await getAllUsers(token);

        if (ok) {
            setUsers(users);
        }
    }

    const updateUsersState = useCallback(() => {
        setUsers([]);
    }, []);

    useEffect(() => {
        fetchUsers();
    });

    return {
        users,
        updateUsersState
    }
}
