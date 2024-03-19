// Icons by Handicon at https://www.flaticon.com/free-icon/next_2989988 and https://www.flaticon.com/free-icon/back_2989985

import previous from "../../assets/previous.png";
import next from "../../assets/next.png";

import * as S from "./styles";

export function Gallery() {
  return (
    <S.GalleryContainer id="gallery">
      <S.Gallery className="container">
        <h2>Galeria</h2>
        <p>
          Fotos de algumas preparações que mais deram orgulho! Todos os pratos
          foram feitos individualmente por mim ou colegas da minha equipe
          durante a faculdade de Gastronomia. Clique nas imagens para ampliar e
          ver detalhes.
        </p>
        <S.Pictures>
          <img
            src={previous}
            alt="Retroceder"
            title="Clique para retroceder o carrossel de imagens"
          />
          <S.Cards>
            <S.Card>
              <img src="https://placehold.co/260" alt="Imagem" />
              <h3>Título</h3>
            </S.Card>
            <S.Card>
              <img src="https://placehold.co/260" alt="Imagem" />
              <h3>Título</h3>
            </S.Card>
            <S.Card>
              <img src="https://placehold.co/260" alt="Imagem" />
              <h3>Título</h3>
            </S.Card>
            <S.Card>
              <img src="https://placehold.co/260" alt="Imagem" />
              <h3>Título</h3>
            </S.Card>
          </S.Cards>
          <img
            src={next}
            alt="Avançar"
            title="Clique para avançar o carrossel de imagens"
          />
        </S.Pictures>
      </S.Gallery>
    </S.GalleryContainer>
  );
}
