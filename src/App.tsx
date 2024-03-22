import GlobalStyle from "./styles";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Gallery />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
