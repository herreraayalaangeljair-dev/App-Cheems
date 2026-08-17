import styled from "styled-components";

const ContenedorProductos = styled.div`
    --ink: #20241f;
    --ink-soft: #4a5148;
    --paper-soft: #faf8f1;
    --sage: #6f8a68;
    --sage-deep: #4d6349;
    --clay: #a15c38;
    --line: rgba(32, 36, 31, 0.1);

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 22px;
    padding: 10px 0;
`;

export default ContenedorProductos;
