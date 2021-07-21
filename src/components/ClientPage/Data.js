import bespreekImage from "../../images/davidjip.jpeg"
import hardloopImage from "../../images/hardlopen.jpeg"
import mindfullImage from "../../images/Mindfulness-2048x1366.jpeg"

export const rij1__tekstContent = {
  cardHeight: "400px",
  lightShadow: false,
  cards: [
    {
      header: "Next Arnhem voor de cliënten",
      content: ["Wij zijn er voor jou."],
      btn: "",
    },
    {
      header: "",
      content: [
        `"Next heeft mij de ruimte geboden om veerkracht te ontwikkelen. Hierdoor kon ik vanuit stilstand die door de heftige ervaringen onstaan was, weer verder mijn pad bewandelen."`,
        "Cliënt (24), Next.",
      ],
      btn: "",
    },
  ],
}

export const rij2__tekstContent = {
  cardHeight: "750px",
  lightShadow: false,
  cards: [
    {
      header: "Werkwijze",
      content: [
        "Next biedt hulp bij alledaagse zaken in het leven. Ons doel is om jou zoveel mogelijk op eigen benen te laten staan en daarbij je volle potentie te ontwikkelen en benutten.",
        "Ons eerste contact is in de intake. Die intake is een kennismakingsgesprek waarin we beoordelen of en wat we voor elkaar kunnen betekenen. We bespreken wat voor en hoeveel begeleiding jij nodig hebt. Een week na het gesprek krijg je de definitieve uitslag en gaan we samen aan de slag.",
        "Hoe we verder gaan, hangt af van wat jij nodig hebt. Wij maken samen met jou een persoonlijk plan waar al jouw behoeften, verwachtingen en toekomstplannen worden vastgelegd. Dit vormt de leidraad van onze verdere aanpak.",
      ],
      btn: "",
    },
    {
      header: "Ambulante Begeleiding of beschermd wonen",
      content: [
        "Zoek je huisvesting of ambulante hulp? Next biedt ambulante begeleiding waarbij een begeleider bij jou thuis langskomt.",
        "Als je intensievere begeleiding nodig hebt, kun je terecht in ons beschermd wonen traject. Next bezit een aantal huizen waarin kamers of studio’s worden verhuurd en waar overdag begeleiding aanwezig is. Hoeveel begeleiding je krijgt, hangt af van je indicatie. Daarnaast is er ook de mogelijkheid tot zelfstandig wonen in een studio van Next, waarbij je ambulant begeleid wordt.",
        "Next heeft als zorgaanbieder een contract met de gemeente Arnhem en omliggende gemeentes in de regio Gelderland. Hieronder zie je welke zorg we leveren in welke gemeente.",
        "Ambulante begeleiding: we werken in de gemeentes Arnhem, Duiven, Lingewaard, Overbetuwe, Renkum (onder andere Oosterbeek, Renkum, Wolfheze), Rheden (onder andere Velp, Rheden en Dieren), Rozendaal en Westervoort. Groepswonen en intensieve begeleiding met 24-uurs bereikbaarheid (Beschermd Wonen): op onze locaties in Arnhem en Velp. Activerend werk: vanuit onze locatie in Arnhem bieden we trajecten als je inwoner bent van Arnhem of Velp.",
      ],
      btn: "",
    },
  ],
}

export const mindfullHero = {
  greyBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Cliënten",
  headLine: "",
  description:
    "Na een periode van opname blijkt het niet gemakkelijk het dagelijks leven weer op te pakken of een nieuwe invulling te vinden. Werk behouden of nieuw werk vinden is lastig. Het onderhouden van contacten en relaties is niet altijd eenvoudig, evenals wonen. Loop jij hier tegenaan? Next biedt hulp.",
  buttonLabel: "",
  imgStart: false,
  img: mindfullImage,
  alt: "Mindfullness",
}

export const hardloopHero = {
  greyBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Verwijzing en kosten",
  headLine: "Verwijzing en kosten",
  description:
    "Voor aanmelding bij Next is een mondelijke of schriftelijke verwijzing nodig. Dat kan via de wijkcoach (zie ook pagina Verwijzers). Zodra de verwijzing binnen is, plannen we een intake gesprek. De kosten voor de begeleiding van Next worden vergoed vanuit de WMO. Hiervoor betaal je, afhankelijk van je inkomen, een eigen bijdrage aan het CAK. Je wijkcoach kan je hierover meer vertellen. Naast deze eigen bijdrage betaal je ook huur voor je kamer of studio bij Next.",
  buttonLabel: "",
  imgStart: true,
  img: hardloopImage,
  alt: "Hardlopen",
}

export const bespreekHero = {
  greyBg: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Wachtlijst",
  headLine: "Wachtlijst",
  description:
    "Ambulante begeleiding kan gemiddeld vanaf de aanmelding en intake na 0-3 weken starten. Voor een woonplek op een van onze locaties voor groepswonen of intensieve begeleiding met 24-uurs bereikbaarheid geldt dat de wachttijd afhankelijk is van de doorstroom en de match met de locatie en medebewoners. De gemiddelde wachttijd hiervoor is 6-12 maanden.",
  buttonLabel: "",
  imgStart: false,
  img: bespreekImage,
  alt: "Bespreking",
}
