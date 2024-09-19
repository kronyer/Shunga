import styled from "styled-components";

export const Table = styled.table`
  margin: auto;
  width: calc(100vw - 27rem);
  border-collapse: separate;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  background-color: #f4f4f4; /* Cor de fundo para o cabeçalho */
  color: #333; /* Cor do texto */
`;

export const Th = styled.th`
  padding: 12px 15px; /* Espaçamento interno das células de cabeçalho */
  border-bottom: 2px solid #ddd; /* Borda inferior das células de cabeçalho */
  text-align: left; /* Alinhamento do texto */
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9; /* Cor de fundo alternada para linhas pares */
  }

  &:hover {
    background-color: #f1f1f1; /* Cor de fundo ao passar o mouse */
    cursor: pointer;
  }
`;

export const Td = styled.td`
  padding: 12px 15px; /* Espaçamento interno das células de dados */
  border-bottom: 1px solid #ddd; /* Borda inferior das células de dados */
`;

export const TableButton = styled.button`
  border: none;
  background-color: transparent;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const ImageTablePreview = styled.img`
  justify-content: center;
  text-align: center;
  align-self: center;
  border-radius: 50%;
  border: 1px solid #ddd;
  height: 50px;
  width: 50px;
`;
