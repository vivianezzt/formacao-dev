import Caixa from "@/components/Caixa";

export default function Tamanho() {
    return(
        <div className="flex flex-col gap-5">
            <Caixa className="p-5 w-16 h-16">#1</Caixa>
            <Caixa className="w-4/5">#2</Caixa>
            <Caixa className="w-1/2">#3</Caixa>
            <Caixa className="w-[75%]">#4</Caixa>
            <Caixa className="min-w-[200px]">#3</Caixa>
            <Caixa className="h-16 w-16 p-5 rounded-lg">#3</Caixa>
            <Caixa className="w-full">#3</Caixa>
        </div>
    )
}