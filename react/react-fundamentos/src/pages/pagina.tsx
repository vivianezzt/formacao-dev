
import "../app/globals.css";
import Link from "next/link";

import Pagina from "@/components/Pagina";
export default function TestePagina() {
  function executar(){
    console.log('O botão foi pressionado!')
  }
  return (
    <Pagina titulo="Minha Página" subtitulo="estou na pasta pages">
      <Link 
      onClick={executar}
      className="bg-red-400 p-2 rounded-lg" href={"./fundamentos/pagina"} >
        Teste
      </Link>
    </Pagina>
  );
}
