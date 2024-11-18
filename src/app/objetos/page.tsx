import Link from "next/link"

export default function ObjetoList() {
    const objetoId = 100
    return (
        <>
            <h1>Lista de objetos</h1>
            <ul>
            <li className="font-black text-emerald-500">
                <Link href="/">Herbario digital</Link>
            </li>
            {Array.from(Array(100), (e, i) => {
                return (
                    <li key={i} className="font-normal text-emerald-800">
                        <Link href={`objetos/${i+1}`}>objeto {i+1}</Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}