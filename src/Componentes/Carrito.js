import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ContenedorCarrito from "../Elementos/ContenedorCarrito";
import ItemCarrito from "../Elementos/ItemCarrito";

const Carrito = ({ carrito }) => {
    return (
        <ContenedorCarrito>
            <h1>Carrito</h1>
            {carrito.length > 0
                ?
                carrito.map((producto) => {
                    return (
                        <ItemCarrito key={producto.id}>
                            <h5>{producto.nombre}</h5>
                            <p>Cantidad: {producto.cantidad}</p>
                        </ItemCarrito>
                    );
                })
                :
                <p><FontAwesomeIcon icon={faShoppingCart} /> El carrito esta vacio</p>
            }
        </ContenedorCarrito>
    );
}

export default Carrito;