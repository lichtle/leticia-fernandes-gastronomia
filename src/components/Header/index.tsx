import { HeaderContainer, Logo, List } from "./styles";

import logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer className="container">
      <Logo src={logo} alt="Logo" />
      <nav>
        <List>
          <li>
            <a href="">Encomendas</a>
          </li>
          <li>
            <a href="">Galeria</a>
          </li>
          <li>
            <a href="">Receitas</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </List>
      </nav>
    </HeaderContainer>
  );
}
