interface Props {
    name: string;
}

export const SidebarChat = ({ name }: Props) => {
    return (
        <div className="transition duration-500 hover:bg-gray-200 cursor-pointer px-5 py-3 shadow capitalize flex justify-between">
            <div>
                <p className="text-xl font-bold">{name}</p>
                <p className="text-sm text-gray-700">{name}</p>
            </div>
            <div className="flex flex-col gap-y-1.5 items-end">
                <p className="text-sm text-gray-700">14:54</p>
                <div className="rounded-full bg-red-500 w-3 h-3" />
            </div>
        </div>
    )
}
