import styled from "styled-components";

export const HeroContainer = styled.div`
  padding: 64px 0;
  background-color: #a6cf98;
`;

export const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    h1 {
      font-size: 56px;
      font-weight: 500;
      color: #557c55;
    }

    p {
      font-size: 28px;
      text-align: justify;
    }
  }
`;
