import styled from "styled-components";

export const BoxGrid = styled.div`
  padding: 3rem 5rem 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  height: 15rem;
`;

export const Box = styled.div`
  position: relative;
  background-color: #f0f0f0; /* Cor de fundo dos boxes */
  border: 1px solid #ccc; /* Borda dos boxes */
  padding: 20px; /* Espaçamento interno dos boxes */
  text-align: center; /* Centraliza o texto dentro dos boxes */
  border-radius: 15px;
`;

export const AddPostButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 15rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  border: none;
  border-radius: 15px;
  cursor: pointer; /* Muda o cursor do mouse para uma mãozinha */
  background-color: #0d1422;
  color: white;
`;
