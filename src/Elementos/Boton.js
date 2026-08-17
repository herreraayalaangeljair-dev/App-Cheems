import styled from "styled-components";

const Boton = styled.button`
    position: relative;
    z-index: 1;
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--paper-soft);
    background: var(--sage);
    border: none;
    border-radius: 8px;
    padding: 11px 16px;
    cursor: pointer;
    margin-top: auto;
    transition: background 0.25s ease, transform 0.2s ease;

    &:hover {
        background: var(--sage-deep);
    }

    &:active {
        transform: scale(0.97);
    }

    &:focus-visible {
        outline: 2px solid var(--sage-deep);
        outline-offset: 3px;
    }
`;

export default Boton;