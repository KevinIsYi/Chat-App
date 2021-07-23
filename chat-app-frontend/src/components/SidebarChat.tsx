import { AiFillPushpin } from 'react-icons/ai'

interface Props {
    name: string;
    pinned?: boolean;
}

export const SidebarChat = ({ name, pinned }: Props) => {
    return (
        <div className="transition duration-500 hover:bg-gray-200 cursor-pointer px-5 py-3 shadow capitalize flex justify-between w-screen md:w-full">
            {
                pinned ? (
                    <div className="flex items-center gap-2">
                        <AiFillPushpin className="text-xl" />
                        <div>
                            <p className="text-xl font-bold">{name}</p>
                            <p className="text-sm text-gray-700">{name}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-xl font-bold">{name}</p>
                        <p className="text-sm text-gray-700">{name}</p>
                    </div>
                )
            }
            <div className="flex flex-col gap-y-1.5 items-end">
                <p className="text-sm text-gray-700">14:54</p>
                <div className="rounded-full bg-red-500 w-3 h-3" />
            </div>
        </div>
    )
}
