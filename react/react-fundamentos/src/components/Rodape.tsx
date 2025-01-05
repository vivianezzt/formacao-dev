/* eslint-disable @typescript-eslint/no-explicit-any */
interface RodapeProps {
  textoEsquerda: string
  textoDireita: string
}

export default function Rodape(props: RodapeProps
) {
  // console.log(props);
  return (
    <div
      className="
        h-16 flex justify-between
        items-center
        text-xl px-10
        bg-cyan-600 
        rounded-md"
    >
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}
