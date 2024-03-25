import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

import { RecipesHeaderContainer } from "./styles";

import { Logo } from "../Header/styles";

import logo from "../../assets/logo.png";

export function RecipesHeader() {
  return (
    <RecipesHeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
    </RecipesHeaderContainer>
  );
}
