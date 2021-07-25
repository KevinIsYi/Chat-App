import { useEffect, useState } from "react";
import { getAllUsers } from "../api/user";
import { User } from "../interfaces/interfaces";

export const useGetUsers = (token: string) => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const { ok, users } = await getAllUsers(token);

        if (ok) {
            setUsers(users);
        }
    }

    useEffect(() => {
        fetchUsers();
    });

    return {
        users
    }
}
