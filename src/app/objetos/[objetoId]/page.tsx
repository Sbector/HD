import { Metadata } from "next"

type Props = {
    params: {
        objetoId: string
    }
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> =>{
    const title = await new Promise (resolve => {
        setTimeout(()=>{
            resolve(`${params.objetoId}`)
        },100)
    })
    return{
        title: `Objeto ${title}`
    }
}

export default function ObjetoDetails({ params } : Props) {
    return (
        <>
            <h1>Detalles sobre objeto {params.objetoId}</h1>
        </>
    )
}