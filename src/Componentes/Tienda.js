import Productos from "./Productos";

const Tienda = ({ agregarAlCarrito }) => {
    return (
        <div>
            <h1>Tienda</h1>
            <Productos agregarAlCarrito={agregarAlCarrito} />
        </div>
    )
}

export default Tienda;