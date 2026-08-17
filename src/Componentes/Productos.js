import listaProductos from "../Data/Infoproductos";
import CajaProducto from "../Elementos/CajaProducto";
import Boton from "../Elementos/Boton";
import ContenedorProductos from "../Elementos/ContenedorProductos";

const Productos = ({ agregarAlCarrito }) => {
    return (
        <ContenedorProductos>
            {listaProductos.map((producto) => (
                <CajaProducto key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <Boton
                        onClick={() => agregarAlCarrito(producto)}
                    >Agregar al carrito</Boton>
                </CajaProducto>
            ))}
        </ContenedorProductos>
    );
}

export default Productos;