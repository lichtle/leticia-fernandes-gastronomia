import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;

  #menu__toggle {
    opacity: 0;
  }

  @media (max-width: 1024px) {
    padding: 32px;
  }

  @media (max-width: 768px) {
    padding: 32px 0;
    justify-content: space-around;

    #menu__toggle:checked + .menu__btn > span {
      transform: rotate(45deg);
    }

    #menu__toggle:checked + .menu__btn > span::before {
      top: 0;
      transform: rotate(0deg);
    }

    #menu__toggle:checked + .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }

    #menu__toggle:checked ~ .menu__box {
      right: 0;
    }

    .menu__btn {
      position: fixed;
      top: 38px;
      right: 16px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
      background-color: #f2ffe9;
      padding: 22px;
      border-radius: 24px;
    }

    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
      display: block;
      position: absolute;
      width: 26px;
      right: 9px;
      height: 2px;
      background-color: #000;
      transition-duration: 0.3s;
    }

    .menu__btn > span::before {
      content: "";
      top: -8px;
      left: 0;
    }

    .menu__btn > span::after {
      content: "";
      top: 8px;
      left: 0;
    }

    .menu__box {
      display: block;
      position: fixed;
      top: 0;
      right: -100%;
      width: 250px;
      height: 100%;
      margin: 0;
      padding: 96px 0 0 8px;
      list-style: none;
      background-color: #eceff1;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
      transition-duration: 0.4s;
    }

    .menu__item {
      display: block;
      padding: 16px 24px;
      font-size: 22px;
      font-weight: 500;
      text-decoration: none;
      transition-duration: 0.25s;
    }

    .menu__item:hover {
      background-color: #cfd8dc;
    }
  }
`;

export const Logo = styled.img`
  width: 300px;

  @media (max-width: 576px) {
    width: 250px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 64px;

  a {
    display: inline-block;
    position: relative;
    font-size: 28px;
    padding-bottom: 8px;
    color: #000;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 50%;
      display: block;
      background: none repeat scroll 0 0 transparent;
      height: 3px;
      width: 0;
      background: #fa7070;
      transition: width 0.3s ease 0s, right 0.3s ease 0s;
    }

    &:hover::after {
      width: 100%;
      right: 0;
    }
  }

  @media (max-width: 1024px) {
    gap: 32px;

    a {
      font-size: 22px;
    }
  }
`;
