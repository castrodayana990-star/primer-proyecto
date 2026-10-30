import Tarjeta from "../components/Tarjeta";
import { tecnologia } from "../data/tecnologia";

function Tecnologias() {
  return (
    <section>
      <h2>Tecnologías de formación</h2>
      <p>Estas son algunas de las herramientas que vamos a trabajar.</p>
      <div className="tarjetas">
        {tecnologia.map((item) => (
          <Tarjeta key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;
