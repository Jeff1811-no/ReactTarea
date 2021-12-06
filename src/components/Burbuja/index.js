import styles from './estilos'
import {Burbujanumero}from './styles'
export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <Burbujanumero>
            {cantidad > 9 ? '9+' : cantidad}
        </Burbujanumero>
    )   
}