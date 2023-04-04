import styled from "styled-components";

interface StyledModalProps {
  isOpen?: boolean;
}

export const StyledModal = styled.div<StyledModalProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

interface ModalContentProps {
  width?: number;
}

export const ModalContent = styled.div<ModalContentProps>`
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  width: ${({ width }) => (width ? `${width}px` : "auto")};
`;

// TODO: Create a button component for the UI library.
export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
