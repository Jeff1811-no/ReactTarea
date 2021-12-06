import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import { ButtonB } from '../Borrar'
import { CarroContenedor,Car, ListaArticulos } from './styles'
export const Carro = ({ cantidad, productos, borrarDelCarro}) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

   
    return (
        <CarroContenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Car onClick={handleMostrarCarro} >
                Carro
            </Car>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos >
                        <ul style={styles.ul}>
                            {
                                productos.map(x => {
                                    return (
                                        <li style={styles.li}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><ButtonB prod={x} borrarDelCarro={borrarDelCarro}>X</ButtonB> {x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </li>
                                    )
                                })
                            }
                            <li style={styles.li}>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </li>
                            <li style={styles.li}>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </li>
                            <li style={styles.li}>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </li>
                        </ul>
                    </ListaArticulos>
            }
        </CarroContenedor>

    )
}