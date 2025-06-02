# Release procedure

Om een nieuwe versie van deze standaard te publiceren, moeten er nieuwe commits op `main` worden gepusht.
Dit kan zowel met een losstaande PR (in het geval van kleine patch fixes) of het synchroniseren van `develop` als er een minor/major release klaar wordt gezet.

# Versioning van deze standaard

Deze standaard volgt het [API-standaarden beheermodel](https://gitdocumentatie.logius.nl/publicatie/api/beheermodel/).
Dit betekent dat deze standaard Semantic Versioning gebruikt in de vorm van MAJOR.MINOR.PATCH.

Hierbij is er wel ambiguïteit in wat Minor versus Major changes zijn, aangezien nieuwe design rules een kleine of grote impact kunnen hebben op bestaande API's die conform de API Design Rules zijn gebouwd.
Om deze ambiguïteit te verduidelijken beschrijven we in deze sectie wat wel en niet valt onder Major, Minor en Patch changes bij het toevoegen van nieuwe design rules.

Het wijzigen van bestaande design rules blijft een Major release.

## Semantic versioning hangt af van of een API client moet worden aangepast

Aangezien deze standaard allerlei design rules specificeert, komt het regelmatig voor dat nieuwe regels worden toegepast op basis van kennis opgedaan van bestaande implementaties.
Hierbij kan het voorkomen dat bestaande API's niet meer voldoen aan een nieuwe set van regels in een nieuwe versie.

Op basis van de analyse van leden van het TO, Beheer en publieke consultatie wordt de impact van de nieuwe regel beoordeeld.
Als een nieuwe regel voor bestaande clients van een API veranderingen vereist, dan is de nieuwe versie Major.
Echter, als een nieuwe regel enkel veranderingen vereist aan een API en voor de rest niet resulteren in veranderingen van een API client, dan is de nieuwe versie Minor.

### Voorbeeld: gebruik standaard HTTP-methodes is Minor

API's worden vrijwel altijd met HTTP-methodes geïmplementeerd.
Het expliciet maken van deze requirement voorkomt ambiguïteit en API clients maken hier praktisch altijd gebruik van.
Een nieuwe versie van de standaard mag een Minor version zijn, omdat de intentie (en verwachting) is dat bestaande API clients compatibel zijn.

### Voorbeeld: vereis versienummer in de URI is Major

Het is een semantische kwestie of het versienummer van een API in de URI moet.
Dit betekent dat er in principe geen industrie-wijd consensus is over het wel, dan wel niet, toevoegen van een versienummer in de URI.
Bestaande API's kunnen hier een andere keuze in hebben gemaakt (lees wel: dit is een potentiële situatie; De design rules hebben van de start deze rule bevat).
Hierdoor is het goed mogelijk dat API clients de URL moeten veranderen.
Daarom zou het toevoegen van deze design rule onderdeel zijn van een Major release.

## Interpretatie van versioning scheme wat betreft compliance

Aangezien de regels in de toekomst kunnen worden uitgebreid is compliance gelinkt aan versies van de standaard.
Compliance aan de ADR heeft daarom de volgende eigenschappen:

* Alle design rules in een nieuwe patch versie zullen dezelfde resultaten opleveren als eerdere patch versies binnen de minor release.
  * Dit betekent dat de compliance checks draaien op de nieuwe patch versie dezelfde score oplevert.
* Bestaande design rules in een nieuwe minor versie zullen dezelfde resultaten opleveren als eerdere minor versies binnen de major release.
Nieuwe design rules in een minor versie kunnen in een kleine minderheid resulteren in nieuwe issues.
  * Dit betekent dat in de meeste gevallen dat compliance checks draaien op de nieuwe versie, deze meestal dezelfde score oplevert.
  Echter, er kunnen situaties zijn waar bestaande API's op enkele nieuwe regels niet direct compliant zijn.
* Design rules in een nieuwe major versie kunnen andere resultaten opleveren.
Hierbij wordt de impact afgewogen ten opzichte van de waarde van de nieuwe design rule.
Dit kunnen zowel nieuwe design rules die een verwachte grote impact hebben, veranderingen vereisen aan API clients of wijzigingen aan bestaande design rules.

## Waarom wordt hier afgeweken van strict Semantic Versioning op basis van enkel de API's zelf?

Het doel van Semantic Versioning is om inzicht te krijgen in de potentiële impact van een nieuwe versie voor de eindgebruiker.
Het versienummer is een communicatiemiddel tussen de maintainer en gebruiker.
Een Major version geeft een signaal af aan de gebruiker dat er een grote impact wordt verwacht.

Deze standaard bevat design rules die limiterend zijn in welke keuzes beheerders van API's kunnen nemen.
Dit betekent dat keuzes van beheerders in het verleden mogelijk niet meer toe gestaan worden op basis van nieuwe inzichten.
Als Semantic Versioning strict wordt gevolgd, dan resulteert dit in (zeer) frequente Major releases, aangezien nieuwe regels potentieel bestaande API's non-compliant kunnen maken.
Het gevolg is dat elke nieuwe design rule van deze standaard een Major release introduceert.
Dit is in strijd met de intentie van Semantic Versioning, omdat hiermee de verwachtingen voor gebruikers onduidelijk wordt.
Niet alle nieuwe design rules hebben dezelfde impact, sommige mogelijk helemaal geen (bijvoorbeeld als er gesproken word over "industry standard").

Om gebruikers van API's zo goed mogelijk te informeren over de impact van wijzigingen wordt er dus gekeken naar de impact op de API clients.
Deze client impact wordt bepaald op basis van input van beheerders van bestaande API's via de, door de governance bepaalde, relevante gremia.
Hierbij is het speerpunt dat impact voor beheerders duidelijk moet zijn zodat inschattingen voor planning en prioritisering haalbaar zijn.
Deze impact inschatting is onhaalbaar als elke release een nieuwe Major version zou opleveren.

Al met al zorgt dit ervoor dat de intentie van een release begrijpelijk is voor API-beheerders en afnemers.
