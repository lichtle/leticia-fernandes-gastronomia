// Icons by Handicon at https://www.flaticon.com/free-icon/next_2989988 and https://www.flaticon.com/free-icon/back_2989985

import { useState, useEffect } from "react";

import { Plates, PlatesType } from "../../utils/platelist";
import { Plate } from "../Plate";

import previous from "../../assets/previous.png";
import next from "../../assets/next.png";

import * as S from "./styles";

export function Gallery() {
  const [plates, setPlates] = useState<PlatesType[]>([]);

  useEffect(() => {
    setPlates(Plates);
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentImageIndex + 4;
    setCurrentImageIndex(newIndex >= plates.length ? 0 : newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentImageIndex - 4;
    setCurrentImageIndex(newIndex < 0 ? plates.length - 4 : newIndex);
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
            {plates
              .slice(currentImageIndex, currentImageIndex + 4)
              .map((item, index) => {
                return (
                  <S.Card key={index}>
                    <Plate plate={item}/>
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
