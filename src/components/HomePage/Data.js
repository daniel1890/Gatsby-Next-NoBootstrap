import Image1 from "../../images/image_moustuin1.jpg"

import AmirFoto from "../../images/-amir,behi.jpeg"
import DavidFoto from "../../images/-david,rinsampessy.jpeg"
import RickFoto from "../../images/-rick,wubs.jpeg"
import JipFoto from "../../images/-jup,wassink.jpeg"

import HardloopImage from "../../images/hardlopen.jpeg"
import WandelImage from "../../images/wandelen.jpeg"
import BespreekImage from "../../images/davidjip.jpeg"

export const homeObjOne = {
  greyBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Next",
  headLine: "Next@Work",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi vero reiciendis nobis impedit ex, molestias numquam pariatur optio, delectus dolorum sit magnam cum. Doloribus nobis quos eos vero odit blanditiis eum? Molestias id et soluta laborum maiores. Ex pariatur voluptates aliquam quis.",
    "Sit explicabo voluptates, libero veritatis iste error quam iusto vero ducimus expedita eveniet adipisci ipsa sint sed corporis accusantium, voluptatum distinctio voluptatibus vitae saepe. Nobis culpa similique iste illo deserunt distinctio tenetur et provident velit consectetur, cum neque officia eaque, quod voluptates ipsum, voluptatibus ratione. Suscipit asperiores eos, accusamus minima cupiditate animi eveniet, doloribus, eaque officiis quo natus.",
  ],
  buttonLabel: "",
  imgStart: "start",
  img: Image1,
  alt: "moestuin",
}

export const mdwks = {
  cardsInARow: "cards__container__4cards",
  wideCards: false,
  parts: [
    {
      imageSrc: DavidFoto,
      cardTitle: "David Rinsampessy",
      cardDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, saepe.",
      btnDesc: "Meer Informatie",
    },
    {
      imageSrc: RickFoto,
      cardTitle: "Rick Wubs",
      cardDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam!",
      btnDesc: "Meer Informatie",
    },
    {
      imageSrc: JipFoto,
      cardTitle: "Jip Wassink",
      cardDesc:
        "Et nesciunt adipisci voluptatem eos blanditiis eum odio necessitatibus qui.",
      btnDesc: "Meer Informatie",
    },
    {
      imageSrc: AmirFoto,
      cardTitle: "Amir Behi",
      cardDesc:
        "Architecto modi perspiciatis deserunt ut quas unde ad illo assumenda voluptas?",
      btnDesc: "Meer Informatie",
    },
  ],
}

export const AlgemeneCards = {
  cardsInARow: "cards__container__3cards",
  wideCards: true,
  parts: [
    {
      imageSrc: HardloopImage,
      cardTitle: "Voor Cliënten",
      cardDesc:
        "Ben jij op zoek naar een veilige en rustige woonomgeving die kleinschalig is, waar contact en betrokkenheid centraal staan? Dan is NEXT jouw volgende stap!",
      btnDesc: "Meer Informatie",
      btnLink: "/clienten/client",
    },
    {
      imageSrc: WandelImage,
      cardTitle: "Voor Verwijzers",
      cardDesc:
        "Next werkt op basis van wetenschappelijke kennis en maatschappelijke inzichten om te komen tot een integraal zorgaanbod. Neem contact op voor een oriëntered gesprek.",
      btnDesc: "Meer Informatie",
      btnLink: "/verwijzers",
    },
    {
      imageSrc: BespreekImage,
      cardTitle: "Over Ons",
      cardDesc:
        "Het contact met naasten van onze bewoners heeft voor ons een hoge prioriteit. Met onze collega's zijn wij 24 uur per dag bereikbaar. Neem contact met ons op als u vragen heeft.",
      btnDesc: "Meer Informatie",
      btnLink: "/over-ons",
    },
  ],
}
