import styled from "styled-components";

const CajaProducto = styled.div`
    position: relative;
    background: var(--paper-soft);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 26px 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        border-color: rgba(111, 138, 104, 0.35);
        box-shadow: 0 14px 30px rgba(32, 36, 31, 0.1);
    }

    &:before {
        content: '';
        position: absolute;
        top: -40px;
        right: -40px;
        width: 120px;
        height: 120px;
        background: radial-gradient(circle, var(--sage) 0%, transparent 70%);
        opacity: 0;
        border-radius: 58% 42% 65% 35% / 45% 55% 45% 55%;
        filter: blur(8px);
        transition: opacity 0.35s ease;
        pointer-events: none;
    }

    &:hover::before {
        opacity: 0.5;
    }

    h3 {
        position: relative;
        z-index: 1;
        font-family: 'Fraunces', serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-size: 1.15rem;
        color: var(--ink);
        margin: 0;
        letter-spacing: -0.2px;
    }

    p {
        position: relative;
        z-index: 1;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: var(--clay);
        margin: 0 0 6px;
    }
`;

export default CajaProducto;