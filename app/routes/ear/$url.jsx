import {useLoaderData, useOutletContext} from '@remix-run/react'
import { useState } from 'react'
import {getEar} from '~/api/ear'


export async function loader({params}){
    const id = params.url
    const ear = await getEar(id)
    return ear
}

export default function Url() {
    const ear = useLoaderData()
    const [cantidad, setCantidad] = useState()
    const {nombre, descripcion, imagen, precio, stock} = ear.data[0].attributes
    const {id} = ear
    const imgM = imagen.data.attributes.formats.medium.url

    const {addCarrito} = useOutletContext()

    const arreglo = []
    for (let i = 1; i <= stock; i++) {
      arreglo.push(i);
    }

    function handleSubmit(e){
        e.preventDefault()

        const producto = {
            id,
            nombre,
            imagen: imgM, 
            precio, 
            stock,
            cantidad,
        }
        if(cantidad < 1 || undefined){
          alert('la cantidad minima es 1')
          return
        }
        
        addCarrito(producto)
    }

  return (
    <div>
        <img src={imgM} alt="" />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <p>{stock}</p>

        <form className='formulario' onSubmit={handleSubmit}>
            
        <label htmlFor="cantidad">Cantidad</label>

            <select 
                id="cantidad" 
                onChange={ e => setCantidad(+e.target.value)}
            >
                <option value="0">Seleccione la cantidad</option>
                {arreglo.map( i => (
                    <option value={i}>{i}</option>
                ))}
              </select>

            <input type="submit" value='agregar al carrito' />
        </form> 
    </div>
  )
}
  