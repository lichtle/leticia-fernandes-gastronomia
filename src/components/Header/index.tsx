import { HeaderContainer, Logo, List } from "./styles";

import logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer className="container">
      <Logo src={logo} alt="Logo" />
      <nav className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <List className="menu__box">
          <li>
            <a className="menu__item" href="#order">
              Encomendas
            </a>
          </li>
          <li>
            <a className="menu__item" href="#gallery">
              Galeria
            </a>
          </li>
          <li>
            <a className="menu__item" href="">
              Receitas
            </a>
          </li>
          <li>
            <a className="menu__item" href="#contact">
              Contato
            </a>
          </li>
        </List>
      </nav>
    </HeaderContainer>
  );
}
