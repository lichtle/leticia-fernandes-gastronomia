import styled from "styled-components";

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 48px;
  display: flex;
  align-items: center;
  gap: 32px;
  width: 850px;
  height: 450px;
  background-color: #fff;

  img {
    max-width: 100%;
    height: 100%;

    &:hover {
      opacity: 1;
      cursor: auto;
    }
  }

  div {
    height: 100%;

    button {
      position: absolute;
      top: 4%;
      right: 2%;
      cursor: pointer;
    }

    h3 {
      font-size: 24px;
      margin: 16px 0;
    }

    p {
      width: 100%;
      font-size: 18px;
      text-align: justify;
    }
  }
`;
