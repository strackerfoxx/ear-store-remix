import {Link} from '@remix-run/react'

export default function Ear({ear}) {
  const { nombre, descripcion, precio, imagen } = ear.attributes
  const { id } = ear
  const imgM = imagen.data.attributes.formats.medium.url
  return (
    <div className="ear">
        <img src={imgM} alt="" />
        <div className="contenido">
            <h3 className="heading"> {nombre} </h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">{precio}</p>
            
            <Link to={`/ear/${id}`} className='enlace'>Ver Producto</Link>
        </div>
    </div>
  )
}
