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
        text-base text-zinc-500 px-10 bg-zinc-900 border-t border-zinc-800"
    >
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}
