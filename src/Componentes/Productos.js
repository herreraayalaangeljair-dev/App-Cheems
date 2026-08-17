import listaProductos from "../Data/Infoproductos";

const Productos = ({ agregarAlCarrito }) => {
    return (
        <div className="productos-contenedor">
            {listaProductos.map((producto) => (
                <div className="producto" key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <button className="btn-agregar"
                        onClick={() => agregarAlCarrito(producto)}
                    >Agregar al carrito</button>
                </div>
            ))}
        </div>
    );
}

export default Productos;