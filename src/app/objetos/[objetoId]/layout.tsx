export default function ObjetoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h2>Otros objetos</h2>
        </>
    )
}