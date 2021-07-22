export const ChatHeader = () => {
    return (
        <div className="px-5 py-5 h-24 bg-gray-300 min-96 overflow-auto lg:overflow-hidden">
            <div className="flex flex-col flex-start items-start">
                <div className="flex flex-row-reverse items-center gap-1.5">
                    <p className="text-xl font-bold">Nombre Contacto</p>
                    <div className="rounded-full bg-red-500 w-3 h-3" />
                </div>
                <p className="text-gray-800 mr-2 font-bold">Status: <span className="font-light">Live as if this were your last day in earth, my friend.</span></p>
            </div>
        </div>
    )
}
