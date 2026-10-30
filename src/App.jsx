import './App.css';
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import PiePagina from "./components/PiePagina";
import fotoPerfil from './images/imagen dayana.avif';
import Inicio from "./paginas/Inicio"
import Perfil from './paginas/Perfil';
import Tecnologias from "./paginas/Tecnologias";
import { Route, Routes } from 'react-router';


function App() {
  const usuario ={
    nombre: 'Dayana castro',
    rol: 'Aprendiz ADSO',
    foto: fotoPerfil,
    correo: 'dayanacastro@gmail.com',
    telefono: '+57 3227006423',
    ubicacion: 'Camilo Torres - Popayán - Cauca',
  }

  return (
    <div className="app-padre">
      <Encabezado usuario={usuario} />
      <div className="app-layout">
        <Sidebar usuario={usuario} />
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil usuario={usuario} />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
          </Routes>
        </main>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;