import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Gallery } from "../components/Gallery";
import { Menu } from "../components/Menu";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Menu />
      <Contact />
    </>
  );
}
