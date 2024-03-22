import * as S from "./styles";

export function Contact() {
  return (
    <S.ContactContainer id="contact">
      <S.ContactInfos className="container">
        <h2>Contato</h2>
        <p>
          Tem alguma dúvida ou sugestão? Entre em contato comigo pelo formulário
          abaixo ou através dos links de contato à direita!
        </p>
        <div>
          <S.FormContainer>
            <S.InputContainer>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
            </S.InputContainer>
            <S.InputContainer>
              <label htmlFor="mail">E-mail</label>
              <input type="email" id="mail" />
            </S.InputContainer>
            <S.InputContainer>
              <label htmlFor="phone">Telefone (com DDD)</label>
              <input type="tel" id="phone" />
            </S.InputContainer>
            <S.InputContainer>
              <label htmlFor="message">Sua mensagem</label>
              <textarea id="message" />
            </S.InputContainer>
            <button type="submit">Enviar</button>
          </S.FormContainer>
          <S.LinksContainer>
            <li>
              <a target="_blank" href="https://wa.me/5535987044117" title="">
                <i className="fa-brands fa-whatsapp" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/leticianegreiros/"
                title=""
              >
                <i className="fa-brands fa-linkedin" />
                LinkedIn
                <a></a>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/frontendkitty/"
                title=""
              >
                <i className="fa-brands fa-instagram" />
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="mail:leticia.negreiros@outlook.com"
                title=""
              >
                <i className="fa-regular fa-envelope" />
                E-mail
              </a>
            </li>
          </S.LinksContainer>
        </div>
      </S.ContactInfos>
    </S.ContactContainer>
  );
}
