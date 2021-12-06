import { Carro } from '../Carro'
import styles from './estilos'
import { NavB } from './styles'
export const Navbar = ({ cantidad, productos, borrarDelCarro }) => {
        return (
        <NavB style={styles.nav}>
            <p>Logo</p>
            <Carro cantidad={cantidad} productos={productos} borrarDelCarro={borrarDelCarro} />
        </NavB>
    )
}