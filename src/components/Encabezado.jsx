import { Link } from "react-router";
import MenuUsuario from "./MenuUsuarios"

function Encabezado({usuario}){
    return(
        <header className="encabezado">
            <h1>Mi primer APP con React</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/tecnologias">Tecnologías</Link>
                <a href={`mailto:${usuario.correo}`}>Contacto</a>
            </nav>
            <MenuUsuario usuario={usuario} />

        </header>
    )
}
export default Encabezado