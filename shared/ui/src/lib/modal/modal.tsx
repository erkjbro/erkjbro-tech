import { FC, useState } from "react";

import { CloseButton, ModalContent, StyledModal } from "./modal.styled";

/* eslint-disable-next-line */
export interface ModalProps {
}

const Modal: FC<ModalProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <StyledModal isOpen={isOpen}>
      <ModalContent width={500}>
        <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
        <h2>Modal Header</h2>
        <p>Some text in the Modal Body</p>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
