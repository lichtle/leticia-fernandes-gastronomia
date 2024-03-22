import styled from "styled-components";

import bg from "../../assets/bg2.png";

export const MenuContainer = styled.div`
  padding: 64px 0;
  background: url(${bg}) no-repeat;
  background-size: contain;
  background-color: #fa7070;

  @media (max-width: 689pxpx) {
    background: url(${bg}) repeat;
    background-position: top 1096px right 0;
  }

  @media (max-width: 576px) {
    background: url(${bg}) repeat;
    background-position: top 96px right 0;
  }
`;

export const MenuDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  color: #f2ffe9;

  h2,
  p {
    text-align: center;
  }

  p {
    width: 80%;
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 48px;
    }

    p {
      padding: 0;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 32px;
  }
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

  @media (max-width: 576px) {
    height: 400px;
    width: 90%;

    img {
      width: 40%;
    }
  }
`;

export const ItemDetails = styled.div`
  padding: 32px 32px 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

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

  button {
    background-color: #a6cf98;
    color: #557c55;
    width: 100%;
    cursor: pointer;
    padding: 8px;
    border: none;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
  }

  @media (max-width: 576px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }

    button {
    }
  }
`;
