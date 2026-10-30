import { Link } from "react-router";

function MenuUsuario({ usuario }) {
  const { nombre, rol, foto, correo } = usuario;

  return (
    <div className="menu-usuario">
      <button type="button" className="menu-usuario-boton">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          className="avatar"
        />

        <span className="menu-usuario-datos">
          <span className="menu-usuario-nombre">{nombre}</span>
          <span className="menu-usuario-rol">{rol}</span>
        </span>

        <span className="flecha">⬇️</span>
      </button>

      <ul className="menu-desplegable">
        <li>
          <Link to="/perfil">🧍 Mi perfil</Link>
        </li>
        <li>
          <a href={`mailto:${correo}`}>📧 Correo</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuUsuario;
