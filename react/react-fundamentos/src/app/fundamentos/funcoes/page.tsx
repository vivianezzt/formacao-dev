export default function Page() {
    function renderizarTitulo(){
        return (
            <div>
                <h1 className="text-red-500 font-bold text-4xl">Titulo função</h1>
                <h2 className="text-green-500 text-2xl">Subtitulo</h2>
            </div>
        )
    }
    function renderizarConteudo(){
        return(
            <ul>
                <li>Ana</li>
                <li>Carlos</li>
                <li>Zico</li>
            </ul>
        )
    }
    return (
        <div>
            {renderizarTitulo()}
            <hr />
            {renderizarConteudo()}
        </div>
    )
}