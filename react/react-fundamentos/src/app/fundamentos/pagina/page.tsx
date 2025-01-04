import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Page() {
  return (
    <div
      className="
        flex flex-col 
        gap-4 h-screen
        p-4"
    >
      <Cabecalho titulo="Minha aplicação" subtitulo="Melhor app da web"/>
      <Conteudo />
      <Rodape />
    </div>
  );
}
