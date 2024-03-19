import styled from "styled-components";

export const HeroContainer = styled.div`
  padding: 64px 0;
  background-color: #a6cf98;
`;

export const Introduction = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      padding: 0;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;

    div {
      h1 {
        font-size: 48px;
      }

      p {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 576px) {
    gap: 64px;

    img {
      width: 60%;
    }

    div {
      width: 80%;
      gap: 64px;

      h1,
      p {
        text-align: center;
      }

      p {
        font-size: 20px;
      }
    }
  }
`;
