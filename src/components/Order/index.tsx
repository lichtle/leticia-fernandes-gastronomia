import * as S from "./styles";

import brownie from "../../assets/brownie.jpg";
import tart from "../../assets/tart.jpg";
import cannoli from "../../assets/cannoli.jpg";
import easterEgg from "../../assets/easter-egg.jpg";
import gnocchi from "../../assets/gnocchi.jpg";
import snack from "../../assets/snack.jpg";

export function Order() {
  return (
    <S.OrderContainer id="order">
      <S.OrderDetails className="container">
        <h2>Faça uma encomenda comigo!</h2>
        <p>
          Escolha um dos itens disponíveis do cardápio abaixo, preencha seus
          dados pessoais e de pagamento, escolha entre as datas de entrega
          disponíveis e pague online. Seu pedido chega pra mim e te envio na
          data combinada!
        </p>
        <S.Menu>
          <S.MenuItem>
            <img src={brownie} alt="" />
            <S.ItemDetails>
              <h3>Brownie (4 unidades)</h3>
              <p>
                Feito com chocolate amargo 80%. Meinho super cremoso com
                casquinha crocante por fora! Com nozes (coloque na observação se
                não quiser nozes).
              </p>
              <button>Adicionar à sacolinha</button>
            </S.ItemDetails>
          </S.MenuItem>
          <S.MenuItem>
            <img src={tart} alt="" />
            <S.ItemDetails>
              <h3>Torta de creme com frutas vermelhas</h3>
              <p>
                Recheio de creme de confeiteiro artesanal com baunilha de
                verdade. Coberta por frutas vermelhas frescas!
              </p>
              <button>Adicionar à sacolinha</button>
            </S.ItemDetails>
          </S.MenuItem>
          <S.MenuItem>
            <img src={cannoli} alt="" />
            <S.ItemDetails>
              <h3>Cannoli (3 unidades)</h3>
              <p>
                Receita original italiana. Cada um com recheio de um sabor: doce
                de leite, brigadeiro com contreau e creme de pistache crocante.
              </p>
              <button>Adicionar à sacolinha</button>
            </S.ItemDetails>
          </S.MenuItem>
          <S.MenuItem>
            <img src={easterEgg} alt="" />
            <S.ItemDetails>
              <h3>Ovo de colher Sensação (500g)</h3>
              <p>
                Recheado com brigadeiro de chocolate ao leite nobre e brigadeiro
                de Nesquik. Acompanha colherzinha.
              </p>
              <button>Adicionar à sacolinha</button>
            </S.ItemDetails>
          </S.MenuItem>
          <S.MenuItem>
            <img src={gnocchi} alt="" />
            <S.ItemDetails>
              <h3>Gnocchi alla romana (500g)</h3>
              <p>
                Acompanha molho cremoso de queijo Fontina. Produto resfriado! É
                necessário aquecê-lo no microondas ou forno.
              </p>
              <button>Adicionar à sacolinha</button>
            </S.ItemDetails>
          </S.MenuItem>
          <S.MenuItem>
            <img src={snack} alt="" />
            <S.ItemDetails>
              <h3>Bolinho caipira (6 unidades)</h3>
              <p>
                Recheado com carne moída e queijo muçarela! Acompanha vinagrete
                feito na hora.
              </p>
              <button>Adicionar à sacolinha</button>
            </S.ItemDetails>
          </S.MenuItem>
        </S.Menu>
      </S.OrderDetails>
    </S.OrderContainer>
  );
}
