export default function Page() {
    const nome = 'João'
    const idade = 40
    return (
        <div>
           <div>{nome}</div>
           <div>{idade * 2}</div>
           <div>{Math.random()}</div>
        </div>
    )
}