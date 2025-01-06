interface ValorProps {
    texto: string
}

export default function Valor(props: ValorProps){
    return(
        <div className="text-6xl font-black bg-yellow-400 rounded-md m-4 p-4">
            {props.texto}
        </div>
    )
}