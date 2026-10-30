import { Link } from "react-router"

function Inicio (){
    const programa = 'análisis y desarrollo de software'

return(
    <section>
        <h2>Bienvenidos al programa {programa}</h2>
        <p>Este es el dashboard de la competencia de frontend con React.</p>
        <p>
            Empieza por conocer <Link to="/perfil">mi perfil</Link>
            o también revisa las{" "}
            <Link to="/tecnologias">tecnologías</Link> que vamos a trabajar.
        </p>
    </section>
)
}

export default Inicio