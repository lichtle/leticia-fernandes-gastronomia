import poire from "../assets/Gallery/poire.png";
import chinghiale from "../assets/Gallery/chinghiale.png";
import madeleines from "../assets/Gallery/madeleines.png";
import dryAged from "../assets/Gallery/dry-aged.png";
import canard from "../assets/Gallery/canard.png";
import spaghetti from "../assets/Gallery/spaghetti.png";
import malloreddus from "../assets/Gallery/malloreddus.png";
import salade from "../assets/Gallery/salade.png";

export type PlatesType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export const Plates: PlatesType[] = [
  {
    id: 1,
    image: spaghetti,
    title: "Spaghetti alla Carbonara",
    description: "",
  },
  {
    id: 2,
    image: malloreddus,
    title: "Malloreddus alla campidanese",
    description: "",
  },
  {
    id: 3,
    image: salade,
    title: "Salade au chèvre chaud",
    description:
      "Salada de alface e radicchio (uma espécie de couve-de-bruxelas roxa), triângulos empanados de queijo de cabra e molho feito com mostarda Dijon, vinagre, creme de leite, manteiga clarificada e azeite.",
  },
  {
    id: 4,
    image: poire,
    title: "Poire belle Hélène",
    description: "",
  },
  {
    id: 5,
    image: chinghiale,
    title: "Cinghiale in umido",
    description: "Ensopado de javali com batatas bolinha e torradas.",
  },
  {
    id: 6,
    image: madeleines,
    title: "Madeleines",
    description:
      "&quot;Bolinhos&quot; esponjosos típicos da França. São assados em formas com o formato de concha e podem ter raspas de limão adicionadas à massa.",
  },
  {
    id: 7,
    image: dryAged,
    title: "Dry Aged",
    description:
      "Dry Age é um processo de maturação à seco controlado em que a carne é deixada para envelhecer por um determinado período de tempo que pode chegar a 1 ano! Tal processo confere ao corte de carne (que pode ser um filé mignon, por exemplo) aromas diversos (a depender do tempo de maturação) e textura extremamente macia. Nessa foto o corte usado ele aparece acompanhado de uma musseline de mandioquinha e chips de batata.",
  },
  {
    id: 8,
    image: canard,
    title: "Canard à l'orange",
    description: "",
  },
];
