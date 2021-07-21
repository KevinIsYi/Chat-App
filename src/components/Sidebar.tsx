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
    ]

    return (
        <div className="w-4/12 flex flex-col shadow">
            <div className="flex justify-between px-5 py-5 bg-purple-300">
                <div className="flex flex-col flex-start items-start">
                    <div className="flex flex-row-reverse items-center gap-1.5">
                        <p className="text-xl font-bold">Tu Nombre</p>
                        <div className="rounded-full bg-red-500 w-3 h-3" />
                    </div>
                    <p className="text-gray-800 mr-2 font-bold cursor-pointer">Status: <span className="font-light">Live as if this were your last day in earth, my friend.</span></p>
                </div>
                <button className="transition duration-300 font-bold text-red-500 hover:text-red-600 w-20">Log Out</button>
            </div>
            <div className="overflow-auto">
                {
                    people.map((people, index) => (
                        <div
                            key={index}
                            className="transition duration-500 hover:bg-gray-200 cursor-pointer px-5 py-3 shadow capitalize flex justify-between"
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
        </div>
    )
}
