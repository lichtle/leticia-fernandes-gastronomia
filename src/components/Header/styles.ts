import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
`;

export const Logo = styled.img`
  width: 300px;
  user-select: none;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  a {
    display: inline-block;
    position: relative;
    font-size: 28px;
    padding-bottom: 8px;
    color: #000;
  }

  a::after {
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

  a:hover::after {
    width: 100%;
    left: 0;
  }
`;
