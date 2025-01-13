import Caixa from "@/components/Caixa";

export default function Padding() {
  return (
    <div className="flex items-center h-screen gap-5">
      <Caixa className="px-3">#1</Caixa>
      <Caixa className="py-5">#2</Caixa>
      <Caixa className="pb-4 pl-6">#3</Caixa>
      <Caixa className="p-7">#3</Caixa>
      <Caixa className="p-32">#3</Caixa>
      <Caixa className="pt-[28px]">#3</Caixa>
    </div>
  );
}
