import MenuUsuario from "./MenuUsuarios"

function Encabezado({usuario}){
    return(
        <header className="encabezado">
            <h1>Mi primer APP con React</h1>
            <nav>
                <a href='#'>Inicio</a>
                <a href='#'>Tecnologías</a>
                <a href='#'>Contacto</a>
            </nav>
            <MenuUsuario usuario={usuario} />

        </header>
    )
}
export default Encabezado