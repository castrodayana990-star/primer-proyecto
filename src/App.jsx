import './App.css';
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Presentacion from "./components/Presentacion";
import Tarjeta from "./components/Tarjeta";
import PiePagina from "./components/PiePagina";
import fotoPerfil from './Images/imagen dayana.avif';


function App() {
  const programa = "Analisis y Desarrollo de Software";

  const usuario = {
  nombre: 'Dayana Castro',
  rol: 'Aprendiz ADSO',
  foto: fotoPerfil,
  correo: "dayanacastro@sena.edu.co",
  telefono: "+57 323 5068524",
  ubicacion: "Las Guacas - Popayán-Cauca"
}

  return (
    <div className="app-padre">
      <Encabezado usuario={usuario} />
      <div className="app-layout">
        <Sidebar usuario={usuario} />
        <main className="contenido">
          <h2>Bienvenido al Programa {programa}</h2>
          <Presentacion usuario={usuario} />
          <section className="tarjetas">

            <Tarjeta 
            icono="⚛️"
            titulo="React"
            descripcion="herramienta de javascrpt para construir interfaces con componentes"
            horas="120"
            destacada={true}
            />

            <Tarjeta
            icono="⚡"
            titulo="Vite"
            descripcion="Herramienta de desarrollo para crear aplicaciones web modernas"
            horas="60"
            destacada={false}
            />

            <Tarjeta 
            icono="🔍"
            titulo="Eslint"
            descripcion="revisa la calidad del video de"
            horas="20"
            destacada={true}
            />
          
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;