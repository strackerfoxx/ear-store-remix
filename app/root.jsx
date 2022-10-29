import { useEffect, useState } from 'react'

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export const meta = () => ({
  charset: "utf-8",
  title: "Guitar LA remix",
  viewport: "width=device-width,initial-scale=1",
});

import Header from '~/components/header'
import Footer from '~/components/footer'

import styleIndex from '~/styles/index.css'
import styleAbout from '~/styles/about.css'
import styleListado from '~/styles/listado.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styleIndex
    },
    {
      rel: 'stylesheet',
      href: styleAbout
    },
    {
      rel: 'stylesheet',
      href: styleListado
    },
    
  ]
}

export default function App() {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  function addCarrito(producto){
    if(carrito.some(productoTemp => productoTemp.id = producto.id)){
      const cantidadActualizada = carrito.map( productoTemp => {
          if(productoTemp.id = producto.id){
            productoTemp.cantidad = producto.cantidad
          }
      })
      setCarrito(cantidadActualizada)
    }else{
      setCarrito([...carrito, producto])
    }
  }

  function cantidadUpdate(producto) {
      const cantidadActualizada = carrito.map( productoTemp => {
        if(productoTemp.id = producto.id){
          productoTemp.cantidad = producto.cantidad
        }
      })
      setCarrito(cantidadActualizada)
  }
  
  return (
    <Document>
        <Outlet context={{
            carrito,
            addCarrito,
            cantidadUpdate,
        }}/>
    </Document>
  );
}

function Document({children}){

  return(
    <html lang="es">
        <head>  
            <Meta/>
            <Links/>
        </head>
        <body>    
            <Header/>    
            {children}
            <Footer/>
            <Scripts />
            <LiveReload/>
        </body>
    </html>
  )
}