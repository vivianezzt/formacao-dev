import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className={`
            flex flex-col
            justify-start
            items-center
            text-2xl
            w-52
            p-2 gap-2 
            bg-zinc-800
            rounded-lg
        `}>
            <MenuItem texto="Pagina #1" url="/fundamentos/pagina"/>
            <MenuItem texto="Pagina #2" url="/pagina"/>
        </div>
    )
}