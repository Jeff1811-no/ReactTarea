import styles from './estilos'
import {BtnB} from './styles'
export const ButtonB = ({children, borrarDelCarro, prod}) => {
    return (
        <BtnB onClick={() => window.confirm("¿Borrar el item?")?borrarDelCarro(prod):null} >{children}</BtnB>
    )
}
