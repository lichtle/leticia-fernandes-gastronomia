// Icons by Handicon at https://www.flaticon.com/free-icon/next_2989988 and https://www.flaticon.com/free-icon/back_2989985

import previous from "../../assets/previous.png";
import next from "../../assets/next.png";

import * as S from "./styles";
import { plateList } from "../../utils/platelist";
import { useState } from "react";

export function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentImageIndex + 4;
    setCurrentImageIndex(newIndex >= plateList.length ? 0 : newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentImageIndex - 4;
    setCurrentImageIndex(newIndex < 0 ? plateList.length - 4 : newIndex);
  };

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
            onClick={prevSlide}
          />
          <S.Cards>
            {plateList
              .slice(currentImageIndex, currentImageIndex + 4)
              .map((plate, index) => {
                return (
                  <S.Card key={index}>
                    <img src={plate.img} alt={plate.title} />
                  </S.Card>
                );
              })}
          </S.Cards>
          <img
            src={next}
            alt="Avançar"
            title="Clique para avançar o carrossel de imagens"
            onClick={nextSlide}
          />
        </S.Pictures>
      </S.Gallery>
    </S.GalleryContainer>
  );
}
