import {useLoaderData} from '@remix-run/react'
import {getEar} from '~/api/ear'


export async function loader({params}){
    const id = params.url
    const ear = await getEar(id)
    return earP = ear.data[0].attributes
}

export default function Url() {
    const ear = useLoaderData()
    const {nombre, descripcion, imagen, precio, stock} = ear
    const imgM = imagen.data.attributes.formats.medium.url
  return (
    <div>
        <img src={imgM} alt="" />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <p>{stock}</p>
    </div>
  )
}
  