import Caixa from "@/components/Caixa";

export default function BoxSizing() {
    return(
        <div className="flex flex-col gap-2">
            <Caixa className="w-36 h-36 rounded-lg border-8 border-gray-900">#1</Caixa>
            <Caixa className="w-36 h-36 border-8 p-24 border-gray-900">#2</Caixa>
            <Caixa className="w-36 h-36 border-8 border-green-500 box-content">#3</Caixa>
            <Caixa>#4</Caixa>
        </div>
    )
}