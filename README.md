# Gatsby Project Met React Componenten

## Informatie

Dit wordt een website gebouwt voor een bedrijf de bedoeling is dat er een volledige front-end gebouwt wordt en daarna wordt deze verbonden met een back-end die gebouwt wordt met Strapi, zodat de back-end makkelijk kan worden aangepast.

## Stappenplan

1. Creeër een nieuwe gatsby-app met gatsby new, gebruik de gatsby-starter-default starter.

#### Navbar Component

1. Creeër een navbar component in de components folder, elk component heeft een js en een css file, gebruik jsx om de markup te schrijven, met javascript syntax kan je makkelijk if/else en array functies gebruiken om de nodige data op zijn plek te zetten.
2. Gebruik **flexbox** en **grid** om alles op de goede plek te plaatsen.
3. Creeër een dropdown component, met de **useState react hook** is er een zorgvuldige manier om de interactie en reactiviteit van het component te schrijven. de useState hook is nodig om de state van het component in geheugen te houden, in dit geval is dit true of false, de dropdown is zichtbaar of niet.
4. Creeër een eigen Button component en gebruik deze in de navbar, met eigen styles kan je de knop makkelijk verschillende eigenschappen geven en deze daarna gebruiken.
5. Wanneer het scherm de juiste breedte of kleiner wordt dan switched de navbar naar een mobile navbar met een hamburger menu, dit is gebruiksvriendelijk op een mobiel scherm, gebruik **css media queries** voor wanneer de breedte bereikt wordt.
6. Gebruik de FontAwesome plugin en React plugin om icons te gebruiken waar nodig is.

#### Footer Component

1. De footer is een stuk simpeler dan de navbar, met _flexbox_ creeër je makkelijk een container die collapsed bij een te smal scherm, gebruik _css media queries_ om bij de juiste pixel breedte de componenten te collapsen.

### HomePage Pagina

De homepage is waar de gebruiker als eerste landt, onderdelen op de pagina naast navbar en footer:

- 3 kaarten component met info en links naar bij-behorende onderdelen.
- Hero gedeelte met afbeelding en omschrijving.
- 4 kaarten component met info over medewerkers.

#### Cards Component

1. Creeër een cards component, gebruik _flexbox_ voor de indeling binnen de kaart en **gebruik flex-style column** om de text onder elkaar af te beelden, gebruik grid om de kaarten juist naast elkaar af te beelden, creeër een unieke css klasse voor de 3 en 4 kaarten naast elkaar indeling. Door parameters te gebruiken in een jsx functie kan je _children passen_ in een component, op deze manier kan je data inladen en javascript array functies gebruiken om de componenten zoveel mogelijk te _abstraheren_, dit is een goede gewoonte om te creeëren alleen is dit beter om te doen wanneer je weet dat je een component op verschillende manieren wilt gebruiken en/of verschillende data gebruikt wordt in het component, het kost immers meer tijd om een functie zoveel mogelijk te abstraheren.

#### Hero Component

1. Gebruik _flexbox_ om 2 columns te creeëren met identieke grootte, gebruik jsx om de order van de indeling te kunnen wisselen.

### OverOns Pagina

De overons pagina geeft informatie over het bedrijf, onderdelen op de pagina naast navbar en footer:

- _TwoInfoCards_ component, 2 kaarten met omschrijving en info.
- _HeroSection_ component, afbeelding met omschrijving.

#### TwoInfoCards Component

1. Creeër een kaarten component waarin tekst wordt afgebeeld, gebruik grid om de kaarten juist naast elkaar te zetten, gebruik jsx om _props te passen_ naar het component.

### Client Pagina

Deze pagina bestaat uit al gecreeërde componenten die makkelijk te recyclen zijn, naast de navbar en footer:

- 2 \* _TwoInfoCards_ component.
- 3 \* _HeroSection_ component.

### ClientTevredenheids- Pagina

Deze pagina start met een inlogscherm want dit formulier mag alleen gebruikt worden door cliënten, naast de navbar en footer bestaat deze pagina uit:

- _LoginPage_ component waar gebruiker wachtwoord moet invoeren.
- _CardHeader_ component met informatie over formulier.
- _ClientTevrForm_ component, in dit component vult de gebruiker de vragen in en kan deze op het einde versturen.

#### LoginPage component

1. Creeër een aparte pagina met een simpel login scherm, de content is alleen beschermd achter een wachtwoord, gebruik **useState hooks** om de state van het wachtwoord in op te slaan.

#### CardHeader component

Een simpele card container met wat text.

#### ClientTevrForm component

1. Creeër een _RadioButtonGroupCard_ component, in dit component wordt met de _useState_ hook de state opgeslagen van welke radiobutton checked is, op het begin is deze waarde leeg en wanneer de gebruiker een knop indrukt zal de useState hook de waarde opslaan. de useState hook moet wel van topdown passed worden naar dit component dus in de parameters zal dit component een state ontvangen, dit maakt het makkelijk om meerdere RadioButtonGroupCard componenten te maken en deze alle een unieke state te geven. Mbv flexbox wordt de indeling van de het formulier bepaalt.
2. In de _ClientTevrForm_ component is het nu makkelijk om meerdere RadioButtonKaarten te creeëren en deze een unieke state te geven. gebruikt flexbox en flex-direction: column om de kaarten onder elkaar te weergeven.

### Verwijzers Pagina

Deze pagina bestaat uit al gecreeërde componenten die makkelijke te recyclen zijn, naast de navbar en footer:

- 2 \* _TwoInfoCards_ component.
- 1 \* _HeroSection_ component.

### Contact Pagina

In deze pagina kan de gebruiker een formulier in vullen om contact op te nemen met het bedrijf, naar de navbar en footer:

- _FormHeaderCard_ component.
- _SignupForm_ component.

#### FormHeaderCard component

Dit is een simpele card container met wat tekst.

#### SignupForm component

Dit component bestaat uit een grid wat verdeelt is in 2 gelijke stukken, in het linkse gedeelte is de contactinformatie van het bedrijf en de locatie weergeven, de locatie is weergeven in een leaflet component, in het rechtse gedeelte is het contactformulier weergeven, het formulier bevat validatie en wordt alleen verzonden wanneer alle velden ingevuld zijn, wanneer het formulier verzonden is wordt een leuke svg afbeelding weergeven.

1. Voeg de Leaflet en React Leaflet plugin toe met npm, Leaflet is nodig om de een wereldmap te weergeven en React Leaflet is nodig omdat React component based is en dit maakt werken met Leaflet iets gebruiksvriendelijker in React.
2. Creeër een _LeafletMap_ component, hierin zal alle informatie ingevuld worden die nodig is om de map te weergeven, aan dit component wordt ook een _hasMounted_ hook toegevoegd, deze is nodig omdat Gatsby een Static Site Generator is, tijdens build time moet gecontroleerd worden of de map component mounted is voordat deze rendered kan worden door de DOM.
3.

## Node Packages

- Gatsby
- Font Awesome
- Leaflet JS/React Leaflet

## Gatsby Plugins

- gatsby-plugin-image
- gatsby-plugin-react-leaflet
- gatsby-plugin-fontawesome-css (Deze plugin voorkomt een bug wanneer de webpage laad en FA zijn eigen styles injecteert die pictogrammen een te grote grootte geven)
