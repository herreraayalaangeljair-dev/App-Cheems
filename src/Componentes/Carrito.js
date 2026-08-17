import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Carrito = ({ carrito }) => {
    return (
        <div className="carrito-productos-contenedor">
            <h1>Carrito</h1>
            {carrito.length > 0
                ?
                carrito.map((producto) => {
                    return (
                        <div className="producto-carrito" key={producto.id}>
                            <div className="productp-nombre-contenedor">
                                <h5>{producto.nombre}</h5>
                            </div>
                            <p>Cantidad: {producto.cantidad}</p>
                        </div>
                    );
                })
                :
                <p> <FontAwesomeIcon icon={faShoppingCart} />El carrito esta vacio</p>
            }
        </div>
    );
}

export default Carrito;