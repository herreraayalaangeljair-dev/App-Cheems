import styled from "styled-components";

const ItemCarrito = styled.div`
    background: white;
    border: 1px solid rgba(32, 36, 31, 0.1);
    border-radius: 10px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    h5 {
        font-family: 'Fraunces', serif;
        font-size: 0.95rem;
        font-weight: 600;
        color: #20241f;
        margin: 0;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-size: 0.82rem;
        color: #4a5148;
        margin: 0;
    }
`;

export default ItemCarrito;
