import Caixa from "@/components/Caixa";

export default function Margin() {
  return (
    <div className="flex items-center h-screen gap-5">
      <Caixa className="mx-3">#1</Caixa>
      <Caixa className="my-5">#2</Caixa>
      <Caixa className="mb-16 pl-6">#3</Caixa>
      <Caixa className="m-7">#3</Caixa>
      <Caixa className="m-32">#3</Caixa>
      <Caixa className="mt-[28px]">#3</Caixa>
    </div>
  );
}
