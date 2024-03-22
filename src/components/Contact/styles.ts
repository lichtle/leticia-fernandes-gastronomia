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

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    display: inline-block;
    position: relative;
    font-size: 28px;
    padding-bottom: 8px;
    margin-bottom: 16px;
    color: #000;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      background: none repeat scroll 0 0 transparent;
      height: 3px;
      width: 0;
      background: #fa7070;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    i {
      margin-right: 16px;
    }

    @media (max-width: 576px) {
      font-size: 22px;
    }
  }
`;
