# Wat is Digikoppeling

In dit hoofdstuk opzet beschrijven we de belangrijkste facetten van de nieuwe Digikoppeling Architectuur.


## Doel van Digikoppeling

(Overheids)organisaties willen diensten klantgericht, efficiënt, flexibel en rechtmatig aanbieden aan burgers en bedrijven. Daarvoor moeten zij gegevens en documenten op een generieke manier met elkaar kunnen uitwisselen.

Digikoppeling voorziet hierin door de standaarden voor deze uitwisseling te definiëren. Met deze logistieke standaardisatie bevordert Digikoppeling de interoperabiliteit tussen (overheids)organisaties.

## Van berichten naar gegevensuitwisseling

Digikoppeling heeft zich vanaf het begin van haar ontstaan gericht op het uitwisselen van berichten, en dan specifiek op op de 'envelop' van een bericht en  niet op de inhoud. Iedere organisatie die Digikoppeling gebruikt kon daarmee de postverzending onafhankelijk van de inhoud inrichten.

Met de toevoeging van het Digikoppeling REST API profiel komt de vergelijking met berichten in enveloppen in het gedrang.

![Verschil SOAP en REST](media/Upwork-Envelop-postcard.png "Soap vs. REST APIs (bron upwork.com")
<br>bron: [https://www.upwork.com/resources/soap-vs-rest-a-look-at-two-different-api-styles](https://www.upwork.com/resources/soap-vs-rest-a-look-at-two-different-api-styles)

Envelop en bericht schuiven in elkaar, de metafoor van enveloppen en postverzending werkt niet meer in alle koppelvlakken van de standaard. Echter, het basisprincipe blijft bestaan: Digikoppeling bemoeit zich niet met de inhoud, Digikoppeling heeft *'Geen boodschap aan de boodschap'*.

## Context van Digikoppeling

Voordat we inhoudelijk op Digikopeling en haar onderliggende standaarden en de hierbij horende toepassingsgebieden ingaan, is het belangrijk om aantal begrippen uit het gebied van gevensuitwisseling nader te beschrijven. Zeer belangrijk is ook het toepassings- en werkingsgebied te beschrijven waarmee Digikoppeling op de lijst van verplichte standaarden ('Pas-toe-of-leg-uit') van het Forum Standaardisatie vermeld staat. Met deze ingredienten  formuleren  we uiteindelijk de scope van Digikoppeling.

### Open en Closed Data

Een belangrijke aanleiding voor het starten van de Commonground beweging van VNG was de ergernis over het op grote schaal rondpompen van gegevens binnen de digitale overheid. De ontsluiting van die gegevens en de noodzaak om die redundante bronnen synchroon te houden veroorzaakt een complex systeem van koppelingen. Een van de oplossingen voor het principe *Single Source of Truth* is om weer terug te gaan naar het concept van   'halen bij de bron', eigenlijk een van drijfveren van het ontstaan van het stelsel van basisregistraties.

Een concept dat sinds begin 2000 een opmars maakt is het principe van *Open Data*. Open Data zijn gegevens die in een open formaat door iedereen voor alle doeleinden vrij gebruikt, hergebruikt en gedeeld kunnen worden. De nadruk voor Open data ligt met name bij de gegevens van de overheid. Gegevens die om reden van privacy, veiligheid, wettelijke verplichtingen en dergelijk niet onder de definitie vallen noemen we in dit document Close Data.

### Open en Closed Diensten

Naast het onderscheid tussen Open en closed data is het ook van belang om onderscheid te maken in publieke en afgeschermde diensten. Voor closed data biedt een overheidsorganisatie afgeschermde, beperkt toegankelijke closed diensten.

Een bron van open data kan een overheidsorganisatie aanbieden via een voor iedereen toegankelijke open dienst. Die bron kan echter essentieel zijn voor bepaalde publieke ketens. De aanbieder kan er voor kiezen om  naast een publieke dienst ook een beperkt toegankelijke dienst te aan te bieden, bijvoorbeeld met een uitgebreide beschikbaarheid, schaalbaarheid of functionaliteit.

- Open Diensten: diensten zonder toegangsbeperking bijvoorbeeld open data.
- Gesloten Diensten: diensten met toegangsbeperking bijvoorbeeld persoonsgegevens en vertrouwelijke gegevens of diensten voor specifieke partijen.


## Wanneer moet Digikoppeling toegepast worden

Digikoppeling staat op de lijst *verplichte standaarden* van het Forum Standaardisatie De lijst beschrijft het toepassingsgebied van Digikoppeling als


## Functioneel toepassingsgebied
> Digikoppeling moet worden toegepast op alle digitale gegevensuitwisseling met behulp van gestructureerde berichten die plaatsvindt met voorzieningen die onderdeel zijn van de GDI, waaronder de basisregistraties, of die sector-overstijgend is.

## Organisatorisch werkingsgebied

> - Nederlandse overheden (Rijk, provincies, gemeenten en waterschappen) en instellingen
> - uit de (semi-) publieke sector.

> Digikoppeling is van toepassing bij aanschaf of ontwikkeling van systemen bedoeld voor gestructureerde berichtenuitwisseling met voorzieningen die onderdeel zijn van de GDI (zoals de basisregistraties) en berichtverkeer dat sectoroverstijgend is.

> Uitgezonderd zijn: de uitwisseling van Geo-informatie (daarvoor bestaat NEN3610) en de gevallen waarin de aanbieder van gegevens vaststelt dat geen noodzaak bestaat om de afnemer van de gegevens te authenticeren.- Nederlandse overheden (Rijk, provincies, gemeenten en waterschappen) en instellingen uit de (semi-) publieke sector.

## Digikoppeling voor externe uitwisseling

Digikoppeling richt zich dus van oudsher primair op het uitwisselen van gegevens 'met behulp van gestructureerde berichten' en maakt (tot nu toe) geen duidelijk onderscheid tussen Open en Closed Data. Dit maakt het niet duidelijk wanneer Digikoppeling gebruikt moet worden. Reden om dit beter af te pellen en de scope van Digikoppeling eens langs een andere lat te leggen.

![Interne en externe uitwisseling](media/DK_Intern-extern.png "Interne en Externe gegevensuitwisseling")

Digikoppeling is een standaard voor gegevensuitwisseling *tussen* organisaties, met voorzieningen die onderdeel zijn van de GDI, waaronder de basisregistraties, of die sector-overstijgend is.

## Digikoppeling voor Closed Data en Open Data via Closed diensten

Digikoppeling bestaat uit een set standaarden voor elektronisch verkeer tussen overheidsorganisaties. Digikoppeling gaat dus om overheidsgegevens. Openbare informatie van de Rijksoverheid mag worden hergebruikt, bijvoorbeeld op websites en in applicaties. Dit is Open Data.

Overheidsgegevens zijn actief beschikbaar als open data voor hergebruik van derden. Behalve als er goede redenen zijn om dat niet te doen. In dat geval noemen we dit Closed Data.

![Open en Closed OverheidsData](media/DK_open_closed_data.png "Open en Closed OverheidsData")

## Wie communiceert met wie

Digikoppeling gaat over communicatie tussen de overheden (G2G) en niet over uitwisseling met burgers (G2C). De communicatie tussen overheid en het bedrijfsleven (G2B) is niet gestandaardiseerd. [TODO: DK verplicht dat verzender en ontvanger elkaar kennen]

![segmentering](media/DK_segmentering.png "segmentering van de communicatie")


## Scope van Digikoppeling

Digikoppeling moet worden toegepast voor geautomatiseerde gegevensuitwisseling tussen informatiesystemen en is verplicht voor Nederlandse overheden (Rijk, provincies, gemeenten en waterschappen) en instellingen uit de (semi-)publieke sector.

<aside class="note">

**Digikoppeling moet worden toegepast wanneer niet-publieke gegevens - Closed Data -   worden uitgewisseld tussen overheden of wanneer gebruikt gemaakt wordt van Gesloten Diensten.**

`LET OP: Dit is voorstel voor een inperking van de huidige verplichting`.

Daarbuiten mag Digikoppeling worden toegepast, bestaande koppelvlakken die nu volgens de Digikoppeling standaard zijn ingericht blijven gewoon bestaan.

</aside>

![Digikoppeling voor closed data G2G uitwisseling](media/DK_closed_g2g.png "Digikoppeling voor closed data G2G uitwisseling")

### Grijs gebied

De verplichting voor Digikoppeling geldt dus voor communicatie tussen overheden. De praktijk is dat voor communicatie met bedrijven vaak verplichtingen gelden die hun oorsprong hebben in Digikoppeling, zoals het gebruik van het OIN en PKIoverheidscertificaten, of zelfs geïnspireerd zijn op Digikoppeling zoals het Koppelvlak *WUS voor Bedrijven* van Digipoort.

![Digikoppeling voor closed data G2B uitwisseling](media/DK_closed_b2g.png "Digikoppeling voor closed data G2B uitwisseling")
