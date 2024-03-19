import { FooterContainer } from "./styles";

const date = new Date();
const year = date.getFullYear();

export function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <span>
          &copy; {year} Leticia Fernandes Gastronomia. Todos os direitos
          reservados.
        </span>
      </div>
    </FooterContainer>
  );
}
