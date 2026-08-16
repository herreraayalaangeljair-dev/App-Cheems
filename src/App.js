import { NavLink, Routes, Route } from "react-router";
import Inicio from "./Componentes/Inicio";
import About from "./Componentes/About";


const App = () => {
  return (
    <div className="contenedor-general">
      <header>
        <div className="contenedor-titulo">
          <img src="https://res.cloudinary.com/ddglscghn/image/upload/v1786838372/chems-Photoroom_ihubv0.png" alt="Imagen cheems" className="imagen-cheems-header" />
          <h1>Práctica Cheems</h1>
          <img src="https://res.cloudinary.com/ddglscghn/image/upload/v1786838372/chems-Photoroom_ihubv0.png" alt="Imagen cheems" className="imagen-cheems-header" />
        </div>

        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/Acercade">Acerca de la web</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Acercade" element={<About />} />
        </Routes>

      </main>







    </div>
  );
}

export default App;
