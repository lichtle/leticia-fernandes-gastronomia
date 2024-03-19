import GlobalStyle from "./styles";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Order } from "./components/Order";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Gallery />
      <Order />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
