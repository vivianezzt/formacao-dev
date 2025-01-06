import Pagina from "@/components/Pagina";
// import "../../app/globals.css";

export default function PaginaSemEstado() {
  let numero = 0;
  function incrementar() {
    numero += 1;
    console.log(numero);
  }
  return (
    <Pagina titulo="Sem estado" subtitulo="capitulo estado">
      <div className="flex flex-col">
        <div>
          <span>Valor: </span>
          <span>{numero}</span>
        </div>
        <button onClick={incrementar} className="bg-blue-500 p-2">Incrementar</button>
      </div>
    </Pagina>
  );
}
