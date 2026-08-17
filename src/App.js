import { NavLink, Routes, Route } from "react-router";
import Inicio from "./Componentes/Inicio";
import About from "./Componentes/About";
import Error404 from "./Componentes/Error404";
import Tienda from "./Componentes/Tienda";


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
          <NavLink to="/Acercade">Acerca de la app-web</NavLink>
          <NavLink to="/tienda">Tienda de memes</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Acercade" element={<About />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </main>

      <aside className="recomendaciones-contenedor">
        <h4>Recomendaciones</h4>
      </aside>

      <aside className="carrito-contenedor">
        <h4>Carrito</h4>
      </aside>






    </div>
  );
}

export default App;
