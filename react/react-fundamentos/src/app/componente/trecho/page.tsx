export default function Page() {
    //const trecho = <h1>Trecho #01</h1>
    const trechos = [
        <div key="1">Trecho #01</div>,
        <div key="2">Trecho #02</div>,
        <div key="3">Trecho #03</div>,

    ]
    return trechos[2]
}