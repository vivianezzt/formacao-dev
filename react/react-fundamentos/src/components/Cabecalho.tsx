interface CabecalhoProps {
  titulo: string
  subtitulo: string
  className?: string
  children?: string
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div
      className={`
        flex flex-col
        justify-center items-center
        font-bold
        bg-purple-600
        rounded-lg ${props.className ?? ''}`}
    >
      <h1 className="text-2xl">{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  );
}
