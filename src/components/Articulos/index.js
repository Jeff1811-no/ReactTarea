import { Articulo } from "../Articulo";
import styles from './estilos'
import { useContext } from "react";
import {ThemeProv} from '../../App';
export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro
    const erased=props.erased.current
    const theme = useContext(ThemeProv)
    console.log(erased);
    return (
        <div style={{ background:  theme }}>
            <div style={styles.mdiv}>
            {erased?<h4 style={styles.h4}>Elimino:{erased}</h4>:null}
                <div style={styles.div}>

                    {
                        productos.map(prod => 
                            // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                            <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}