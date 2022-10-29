import {useOutletContext} from '@remix-run/react'
import { useState, useEffect } from 'react';



export default function carrito() {

  const {carrito, cantidadUpdate} = useOutletContext()
  const [cantidad, setCantidad] = useState()

  const arreglo = []
  function option(stock){
    for (let i = 1; i <= stock; i++) {
      arreglo.push(i);
    }
  }

  useEffect(() => {
    cantidadUpdate(carrito)
  
  }, [carrito])
  

  return (
    <div>
      <div className='carrito'>
        
      {carrito?.map(producto => (
        <div key={producto.id} >
          {option(producto.stock)}
          <p>{producto.nombre}</p>
          <p>{producto.cantidad}</p>

            <form>
                <label htmlFor="cantidad">modificar cantidad</label>
                <select id="cantidad" onChange={ e => setCantidad(e.target.value) }>
                  {arreglo.map( i => (
                    <option value={i}>{i}</option>
                  ) )}
                </select>
            </form>
        </div>
      ))}

        
      </div>

        
    </div>
  )
}
