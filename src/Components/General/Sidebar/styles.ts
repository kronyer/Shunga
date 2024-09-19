import styled from "styled-components";

export const SidebarDiv = styled.div`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 17rem;

  background-color: #0d1422;
`;

export const NavButton = styled.button`
  width: 80%;
  padding-block: 0.6rem;
  background-color: transparent;
  color: #f2f2f2;
  font-weight: 800;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  transition: background-color 0.1s ease;
  margin-block: 7px;
  cursor: pointer;
  &:hover {
    color: #0d1422;
    background-color: #f2f2f2;
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const SidebarHeader = styled.h1`
  color: #f2f2f2;
  text-align: center;
  margin-block: 2rem;
  text-decoration: underline;
  user-select: none; /* Para navegadores modernos */
  -webkit-user-select: none; /* Para Safari e outros navegadores baseados em WebKit */
  -moz-user-select: none; /* Para Firefox */
  -ms-user-select: none; /* Para IE e Edge */
`;
