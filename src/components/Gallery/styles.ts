import styled from "styled-components";

import bg from "../../assets/bg.png";

export const GalleryContainer = styled.div`
  padding: 64px 0;
  background-color: #f2ffe9;
  background: url(${bg}) no-repeat;
  background-size: cover;

  // @media (max-width: 689px) {
  //   background: url(${bg}) repeat;
  //   background-position: top 400px right 0;
  // }

  @media (max-width: 576px) {
    background: url(${bg}) repeat;
    background-position: top 500px right 0;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  p {
    text-align: center;
    width: 70%;
    padding: 0;
  }
`;

export const Pictures = styled(Gallery)`
  flex-direction: row;
  gap: 8px;

  img {
    cursor: pointer;
  }
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Card = styled.li`
  img {
    width: 260px;
    height: 260px;
    object-fit: cover;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;
