import Link from "next/link"

export default function ObjetoList() {
    const objetoId = 100
    return (
        <>
            <h1>Lista de objetos</h1>
            <h2><Link href={`objetos/${objetoId}`}>Objeto {objetoId}</Link></h2> 
        </>
    )
}