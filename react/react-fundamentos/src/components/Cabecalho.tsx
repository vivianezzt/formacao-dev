/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Cabecalho(props: any) {
  console.log(props.titulo);
  console.log(props.subtitulo);
  return (
    <div
      className="
        flex flex-col
        justify-center items-center
        h-36 
        font-bold
        bg-purple-600 p-4
        rounded-md"
    >
      <h1 className="text-2xl">{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  );
}
