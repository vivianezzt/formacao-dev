export default function Mobile() {
    // "xs" sm md lg xl 2xl
    return(
        <div className={`
            flex justify-center
            items-center
            bg-red-500 h-32
            text-2xl md:text-4xl lg:text-6xl
            w-[90%] 2xl:w-[70%]
        `}>
            <span className="inline sm:hidden">Mobile</span>
            <span className="hidden sm:inline">Não mobile</span>
        </div>
    )
}