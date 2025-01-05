/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Conteudo(props: any) {
  console.log(props);
  return (
    <div
      className="
        flex 
        flex-1 
        items-start
        p-4 
        text-2xl rounded-lg
        bg-emerald-500 
        "
    >{props.children}</div>
  );
}
