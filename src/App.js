import { Fragment, useState, useEffect, useRef, createContext, useContext} from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
export const ThemeProv = createContext(); //Context

// base de datos
const informacion = {
  articulos: [
    {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
    {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
    {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
    {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
  ],
  carrito: [
    //{id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2},
  ]
}


function App() {

  const [cantidad,setCantidad]=useState(0)
  const [data, setData] = useState(informacion)
  const erased = useRef() //UseRef
  const agregarAlCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }

    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }

  const borrarDelCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      data.carrito.forEach((x,index) =>{   
        if( x.id === producto.id){
          erased.current=producto.nombre;
          data.carrito.splice(index,1);
        }
      })
      setData({...data})
    }
  }
  
  
  // App > Navbar > Carro > Burbuja > Numero de productos


  //UseEffect
  useEffect(() => {
   setCantidad(data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)) 
  }, [data]);
  
   const ValTheme="#a9a9a9"
  
  return (
    <ThemeProv.Provider value={ValTheme}>
      <Fragment>
        <Navbar cantidad={cantidad} productos={data.carrito}  borrarDelCarro={borrarDelCarro}  />
        < Articulos agregarAlCarro={agregarAlCarro} data={data} erased={erased} />
      </Fragment>
    </ThemeProv.Provider> 
  );
}

export default App;
