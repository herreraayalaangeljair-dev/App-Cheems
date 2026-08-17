import styled from "styled-components";

const ContenedorCarrito = styled.div`
    font-family: 'Inter', sans-serif;
    width: 100%;
    background: transparent;
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    > h1 {
        font-family: 'Fraunces', serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-size: 1.3rem;
        color: #20241f;
        margin: 0 0 4px;
        letter-spacing: -0.3px;
        text-align: left;
        position: relative;
        padding-bottom: 12px;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 42px;
            height: 4px;
            background: #6f8a68;
            border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
            opacity: 0.8;
        }
    }

    > p {
        text-align: center;
        color: #4a5148;
        font-size: 0.9rem;
        padding: 28px 12px;
        border: 1px dashed rgba(32, 36, 31, 0.15);
        border-radius: 10px;
        margin: 0;
    }
`;

export default ContenedorCarrito;
