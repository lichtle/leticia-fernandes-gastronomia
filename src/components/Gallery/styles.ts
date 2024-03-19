import styled from "styled-components";

import bg from "../../assets/bg.png";

export const GalleryContainer = styled.div`
  padding: 64px 0;
  background-color: #f2ffe9;
  background: url(${bg}) no-repeat;
  background-size: cover;
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
  background-color: #557c55;
  color: #f2ffe9;

  h3 {
    font-weight: 500;
    text-align: center;
    padding: 8px 0;
  }
`;
