import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 16px 0;
  text-align: center;
  background-color: #557c55;
  color: #a6cf98;
  user-select: none;

  @media (max-width: 576px) {
    div {
      max-width: 80%;
    }

    span {
      font-size: 14px;
    }
  }
`;
