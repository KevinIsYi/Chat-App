export const Sidebar = () => {

    const people = [
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
        "kevin",
    ]

    return (
        <div className="w-4/12 overflow-auto">
            {
                people.map((people, index) => (
                    <div
                        key={index}
                        className="transition duration-500 hover:bg-gray-200 cursor-pointer px-5 py-5 shadow capitalize flex justify-between"
                    >
                        <div>
                            <p className="text-xl font-bold">{people}</p>
                            <p className="text-sm text-gray-700">{people}</p>
                        </div>
                        <div className="flex flex-col gap-y-1.5 items-end">
                            <p className="text-sm text-gray-700">14:54</p>
                            <div className="rounded-full bg-red-500 w-3 h-3" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
