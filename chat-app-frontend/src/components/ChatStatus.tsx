import { useState } from "react";
import { useContext } from "react"
import { AiOutlineEdit } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { AuthContext } from '../context/auth/AuthContext';
import { SocketContext } from '../context/SocketContext';

interface FormValues {
    newStatus: string;
}

export const ChatStatus = () => {

    const { authState: { user: { userStatus, uid } }, changeStatus } = useContext(AuthContext);
    const { socket } = useContext(SocketContext);
    const [isChangingStatus, setIsChangingStatus] = useState(false);
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            newStatus: userStatus
        }
    });

    const updateStatus = async (e: FormValues) => {
        const { newStatus } = e;

        if (newStatus !== userStatus) {
            socket?.emit('change-status', {
                uid,
                newStatus
            });
    
            changeStatus(newStatus);
        }

        setIsChangingStatus(false);
    }

    const openEditStatus = () => {
        setIsChangingStatus(true);
    }

    return (
        <>
            {
                isChangingStatus ? (
                    <div className="flex gap-1">
                        <textarea
                            className="resize-none rounded w-full outline-none p-1"
                            {...register('newStatus')}
                        />
                        <button
                            className="text-green-500 transition duration-300 hover:text-green-600"
                            onClick={handleSubmit(updateStatus)}
                        >
                            Update
                        </button>
                    </div>
                ) : (
                    <div
                        className="flex my-2 items-center gap-1 max-w-xs cursor-pointer max-h-10"
                        onClick={openEditStatus}
                    >
                        <AiOutlineEdit className="min-w-24 text-2xl	" />
                        <p className="text-gray-800 mr-2 font-bold cursor-pointer">Status:
                            <span className="font-light break-words	">
                                {' '}{userStatus.length > 50 ? `${userStatus.substr(0, 50)}...` : userStatus}
                            </span>
                        </p>
                    </div>

                )
            }
        </>
    )
}
