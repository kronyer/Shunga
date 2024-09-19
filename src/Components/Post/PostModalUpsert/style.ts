import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<{ isClosing: boolean }>`
  background: white;
  width: 600px;
  height: 100%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s
    forwards;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  left: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export const ModalInside = styled.div`
  margin-top: 4rem;
  height: 100%;
  padding-inline: 4rem;
`;
