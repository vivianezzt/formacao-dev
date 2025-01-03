export default function Page() {
    function Titulo(){
        return (
            <div>
                <h1>Titulo</h1>
                <h2>Subtitulo</h2>
            </div>
        );
    }
    function conteudo(){
        return (
            <div>
                <h1>Conteudo</h1>
                <h2>Subconteudo</h2>
            </div>
        );
    }
    function renderizarConteudo(){
        return (
            <div>
                <h1>Renderizar Conteudo</h1>
                <h2>Subrenderizar Conteudo</h2>
            </div>
        );
    }
    return (
        <div>
            {Titulo()}
            {conteudo()}
            {renderizarConteudo()}
        </div>
    )
}