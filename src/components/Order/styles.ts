import styled from "styled-components";

import bg from "../../assets/bg2.png";

export const OrderContainer = styled.div`
  padding: 64px 0;
  background: url(${bg}) no-repeat;
  background-size: contain;
  background-color: #fa7070;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  color: #f2ffe9;

  p {
    padding: 32px;
    text-align: center;
    width: 70%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.div`
  color: #000;
  border-radius: 8px;
  width: 450px;
  height: 360px;
  background-color: #f2ffe9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  img {
    height: 100%;
    width: 200px;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
  }
`;

export const ItemDetails = styled.div`
  padding: 32px 32px 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  button {
    background-color: #a6cf98;
    width: 40%;
    width: 100%;
    cursor: pointer;
    padding: 8px;
    border: none;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
  }

  h3 {
    font-weight: 500;
    font-size: 22px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    text-align: left;
    padding: 0;
  }
`;
