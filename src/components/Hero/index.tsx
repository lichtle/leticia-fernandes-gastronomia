import { HeroContainer, Introduction } from "./styles";

import profile from "../../assets/profile.png";

export function Hero() {
  return (
    <HeroContainer>
      <Introduction className="container">
        <div>
          <h1>Olá! Meu nome é Leticia</h1>
          <p>
            Nascida em São Lourenço - MG, Leticia é gastróloga graduada desde
            2021 pelo Centro Universitário Senac de Campos do Jordão.
            Atualmente, residente em Santo André - SP e atua como personal chef,
            sempre criando pratos cheios de sabor, sejam eles simples ou
            sofisticados! Nas horas vagas é confeiteira e gosta de ouvir música
            e assistir filmes com suas duas gatinhas.
          </p>
        </div>
        <img src={profile} alt="Foto de perfil" />
      </Introduction>
    </HeroContainer>
  );
}
