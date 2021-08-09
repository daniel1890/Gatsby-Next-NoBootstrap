# Gatsby Project Met React Componenten

## Informatie

Dit wordt een website gebouwt voor een bedrijf de bedoeling is dat er een volledige front-end gebouwt wordt en daarna wordt deze verbonden met een back-end die gebouwt wordt met Strapi, zodat de back-end makkelijk kan worden aangepast.

## Stappenplan

1. Creeër een nieuwe gatsby-app met gatsby new, gebruik de gatsby-starter-default starter.

#### Navbar Component

1. Creeër een navbar component in de components folder, elk component heeft een js en een css file, gebruik jsx om de markup te schrijven, met javascript syntax kan je makkelijk if/else en array functies gebruiken om de nodige data op zijn plek te zetten.
2. Gebruik flexbox en grid om alles op de goede plek te plaatsen.
3. Creeër een dropdown component, met de useState react hook is er een zorgvuldige manier om de interactie en reactiviteit van het component te schrijven. de useState hook is nodig om de state van het component in geheugen te houden, in dit geval is dit true of false, de dropdown is zichtbaar of niet.
4. Creeër een eigen Button component en gebruik deze in de navbar, met eigen styles kan je de knop makkelijk verschillende eigenschappen geven en deze daarna gebruiken.
5. Wanneer het scherm de juiste breedte of kleiner wordt dan switched de navbar naar een mobile navbar met een hamburger menu, dit is gebruiksvriendelijk op een mobiel scherm, gebruik css media queries voor wanneer de breedte bereikt wordt.
6. Gebruik de FontAwesome plugin en React plugin om icons te gebruiken waar nodig is.

#### Footer Component

1. De footer is een stuk simpeler dan de navbar, met flexbox creeër je makkelijk een container die collapsed bij een te smal scherm, gebruik css media queries om bij de juiste pixel breedte de componenten te collapsen.

### HomePage Pagina

De homepage is waar de gebruiker als eerste landt, onderdelen op de pagina naast navbar en footer:

- 3 kaarten component met info en links naar bij-behorende onderdelen.
- Hero gedeelte met afbeelding en omschrijving.
- 4 kaarten component met info over medewerkers.

#### Cards Component

1. Creeër een cards component, gebruik flexbox voor de indeling binnen de kaart en gebruik flex-style column om de text onder elkaar af te beelden, gebruik grid om de kaarten juist naast elkaar af te beelden, creeër een unieke css klasse voor de 3 en 4 kaarten naast elkaar indeling. Door parameters te gebruiken in een jsx functie kan je children passen in een component, op deze manier kan je data inladen en javascript array functies gebruiken om de componenten zoveel mogelijk te abstraheren, dit is een goede gewoonte om te creeëren alleen is dit beter om te doen wanneer je weet dat je een component op verschillende manieren wilt gebruiken en/of verschillende data gebruikt wordt in het component, het kost immers meer tijd om een functie zoveel mogelijk te abstraheren.

#### Hero Component

1. Gebruik flexbox om 2 columns te creeëren met identieke grootte, gebruik jsx om de order van de indeling te kunnen wisselen.

### OverOns Pagina

De overons pagina geeft informatie over het bedrijf, onderdelen op de pagina naast navbar en footer:

- 2 kaarten met informatie erop \* 2.
- Hero gedeelte met afbeelding en omschrijving.

#### TwoInfoCards Component

1. Creeër een kaarten component waarin tekst wordt afgebeeld, gebruik grid om de kaarten juist naast elkaar te zetten, gebruik jsx om props te passen naar het component.

## Node Packages

- Gatsby
- Font Awesome
- Leaflet JS/React Leaflet

## Gatsby Plugins

- gatsby-plugin-image
- gatsby-plugin-react-leaflet
- gatsby-plugin-fontawesome-css (Deze plugin voorkomt een bug wanneer de webpage laad en FA zijn eigen styles injecteert die pictogrammen een te grote grootte geven)
