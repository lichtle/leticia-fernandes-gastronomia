import { FooterContainer } from "./styles";

const date = new Date();
const year = date.getFullYear();

export function Footer() {
  return (
    <FooterContainer>
      &copy; {year} Leticia Fernandes Gastronomia. Todos os direitos reservados.
    </FooterContainer>
  );
}
