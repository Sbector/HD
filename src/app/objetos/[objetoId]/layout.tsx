import Link from "next/link"

export default function ObjetoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h2><Link href="/objetos">Otros objetos</Link></h2>
        </>
    )
}