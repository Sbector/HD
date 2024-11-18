import { Metadata } from "next"
import Header from "@/components/Header"
import "./styles.css"

export const metadata: Metadata = {
  title: {
    default:"Herbario digital",
    template:"%s | HD"
  },
  description: 'Una colección arbitraria e incompleta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header/>
        {children}
        <footer style={{backgroundColor: "ghostwhite", padding:"1rem"}}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
