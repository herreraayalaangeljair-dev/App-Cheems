import { NavLink, Routes, Route } from "react-router";
import { useState } from "react";
import Inicio from "./Componentes/Inicio";
import About from "./Componentes/About";
import Error404 from "./Componentes/Error404";
import Tienda from "./Componentes/Tienda";
import Carrito from "./Componentes/Carrito";


const App = () => {
  const [carrito, setCarrito] = useState([]);

  //agregar producto al carrito
  const agregarAlCarrito = (productoAgregado) => {
    setCarrito((cambiarCarrito) => {

      //comprobar si el producto ya esta en el carrito true/false
      const productoEncontrado = cambiarCarrito.find((item) => {
        return item.id === productoAgregado.id
      })

      //if-else para comprobar
      if (productoEncontrado) {
        return (
          cambiarCarrito.map((item) => {
            if (item.id === productoAgregado.id) {
              return {
                ...item,
                cantidad: item.cantidad + 1,
              }
            }
            else {
              return item
            }
          })
        );
      } else {
        return [...cambiarCarrito, { ...productoAgregado, cantidad: 1 }]
      }

    })

  }
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
          <Route path="/tienda" element={<Tienda agregarAlCarrito={agregarAlCarrito} />} />
        </Routes>
      </main>


      <aside className="carrito-contenedor">
        <Carrito carrito={carrito} />
      </aside>
    </div>
  );
}

export default App;
