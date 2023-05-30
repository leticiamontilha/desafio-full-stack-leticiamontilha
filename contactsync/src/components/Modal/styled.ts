import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: var(--xanthous);
  width: 400px;
  max-width: 80%;
  margin: 100px auto;
  padding: 20px;
  border-radius: 10px;
  height: max-content;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;