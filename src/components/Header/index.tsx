import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import * as S from "./styles";

import logo from "../../assets/logo.png";

export function Header() {
  return (
    <S.HeaderContainer className="container">
      <Link to="/">
        <S.Logo src={logo} alt="Logo" />
      </Link>
      <nav className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <S.List className="menu__box">
          <li>
            <HashLink to="#menu" className="menu__item">
              Encomendas
            </HashLink>
          </li>
          <li>
            <HashLink to="#gallery" className="menu__item">
              Galeria
            </HashLink>
          </li>
          <li>
            <Link to="/receitas" className="menu__item">
              Receitas
            </Link>
          </li>
          <li>
            <HashLink to="#contact" className="menu__item">
              Contato
            </HashLink>
          </li>
        </S.List>
      </nav>
    </S.HeaderContainer>
  );
}
