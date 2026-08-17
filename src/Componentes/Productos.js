import listaProductos from "../Data/Infoproductos";
import CajaProducto from "../Elementos/CajaProducto";
import Boton from "../Elementos/Boton";

const Productos = ({ agregarAlCarrito }) => {
    return (
        <div className="productos-contenedor">
            {listaProductos.map((producto) => (
                <CajaProducto key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <Boton className="btn-agregar"
                        onClick={() => agregarAlCarrito(producto)}
                    >Agregar al carrito</Boton>
                </CajaProducto>
            ))}
        </div>
    );
}

export default Productos;