/* eslint-disable @typescript-eslint/no-explicit-any */
import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

interface PaginaProps {
  titulo: string
  subtitulo: string
  children: any
}

export default function Pagina(props: PaginaProps) {

  const ano = new Date().getFullYear();
  return (
    <div className="flex  h-screen ">
      <AreaLateral />
      <div className="flex flex-col  flex-1">
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} className="h-18 bg-zinc-800"/>
        <Conteudo>{props.children}</Conteudo>
        <Rodape
          textoEsquerda="Feito com amor ❤️ por Viviane Silva"
          textoDireita={`Todos os direitos reservados © ${ano}`}
        />
      </div>
    </div>
  );
}
