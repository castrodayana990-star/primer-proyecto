import fotoPerfil from '../images/imagen dayana.avif'

function MenuUsuario(){
    const nombre = 'Dayana Castro'
    const rol = 'Aprendiz'

    return(
        <div className='menu-usuario'>
            <button type='button' className='menu-usuario-boton'>
                <img src={fotoPerfil} alt={`Foto de ${nombre}`} className='avatar' />
                <span className='menu-usuario-datos'>
                    <span className='menu-usuario-nombre'> {nombre}</span>
                    <span className='menu-usuario-rol'> {rol}</span>
                </span>
                <span className='flecha'> ⬇️ </span>
            </button>

            <ul className='menu-desplegable'>
                <li><a href='#'> 🧍 Mi perfil</a></li>
                <li><a href='#'> ⚙️ Configuracion</a></li>
                <li><a href='separador'></a></li>
                <li><a href='#' className='cerrar-session'> 🚪 Cerrar sesión </a></li>
            </ul>
        </div>
    )
}

export default MenuUsuario