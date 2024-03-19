import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 64px 0;
`;

export const ContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 64px;

  h2,
  p {
    text-align: center;
    width: 80%;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 576px) {
    h2,
    p {
      width: 100%;
    }

    > div {
      flex-direction: column;
      gap: 64px;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 500px;

  label {
    font-weight: 500;
  }

  label,
  button {
    font-size: 18px;
  }

  input,
  textarea,
  button {
    padding: 12px;
    border: 1px solid #000;
  }

  textarea {
    resize: none;
    height: 100px;
    overflow-y: scroll;
    border: 1px solid #000;
  }

  button {
    cursor: pointer;
    background-color: #a6cf98;
    border: none;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
    color: #557c55;
  }

  @media (max-width: 576px) {
    width: 80%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Link = styled.a`
  color: #000;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: 0.3s ease-in-out;

  &:hover {
    &:nth-child(odd) {
      color: #557c55;
    }

    &:nth-child(even) {
      color: #fa7070;
    }
  }

  @media (max-width: 576px) {
    font-size: 22px;
  }
`;
