import styles from './estilos'
import {Btn} from './styles'
export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <Btn onClick={() => agregarAlCarro(prod)} >{children}</Btn>
    )
}
