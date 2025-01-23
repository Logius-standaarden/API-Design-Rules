# Release procedure

Om een nieuwe versie van deze standaard te publiceren, moeten er nieuwe commits op `main` worden gepusht.
Dit kan zowel met een losstaande PR (in het geval van kleine patch fixes) of het synchroniseren van `develop` als er een minor/major release klaar wordt gezet.

# Versioning van deze standaard

Deze standaard volgt het [API-standaarden beheermodel](https://gitdocumentatie.logius.nl/publicatie/api/beheermodel/).
Dit betekent dat deze standaard Semantic Versioning gebruikt in de vorm van MAJOR.MINOR.PATCH.

Hierbij is er wel ambiguiteit in wat Minor versus Major changes zijn, aangezien nieuwe design rules een kleine of grote impact kunnen hebben op bestaande APIs die conform de API Design Rules zijn gebouwd.
Om deze ambiguiteit te verduidelijken beschrijven we in deze sectie wat wel en niet valt onder Major, Minor en Patch changes bij het toevoegen van nieuwe design rules.

Het wijzigen van bestaande design rules blijft een Major release.

## Het toevoegen van een nieuwe design rule is Minor, tenzij grote impact wordt verwacht

Aangezien deze standaard allerlei design rules specificeert, komt het regelmatig voor dat nieuwe regels worden toegepast op basis van kennis opgedaan van bestaande implementaties.
Hierbij kan het voorkomen dat bestaande implementaties niet meer voldoen aan een nieuwe set van regels in een nieuwe versie.

Op basis van de analyse van leden van het TO, Beheer en publieke consultatie word de impact van de nieuwe regel beoordeeld.
Als een nieuwe regel een verwachte minimale impact heeft, dan kan hij onderdeeld zijn van een Minor release.

### Voorbeeld: gebruik standaard HTTP methodes is Minor

APIs worden vrijwel altijd met HTTP methodes geimplementeerd.
Het expliciet maken van deze requirement voorkomt ambiguiteit en heeft een verwachte kleine impact.
Een nieuwe versie van de standaard mag een Minor version zijn, omdat de intentie (en verwachting) is dat bestaande APIs grotendeels compatibel zijn.

### Voorbeeld: vereis versie nummer in de URI is Major

Het is een semantische kwestie of het versie nummer van een API in de URI moet.
Dit betekent dat er in principe geen industrie-wijd concensus is over het wel, dan wel niet, toevoegen van een versie nummer in de URI.
Bestaande APIs kunnen hier een andere keuze in hebben gemaakt (lees wel: dit is een potentiele situatie, de design rules hebben van de start deze rule bevat) en impact kan dus groot zijn.
Vooral voor APIs die al (veel) gebruikers hebben die moeten migreren naar nieuwe URIs.
Omdat de verwachte impact groot is voor organisaties, zou het toevoegen van deze design rule onderdeel zijn van een Major release.

## Interpretatie van versioning scheme wat betreft compliance

Aangezien de regels in de toekomst kunnen worden uitgebreid is compliance gelinkt aan versions van de standaard.
Compliance aan de ADR heeft daarom de volgende eigenschappen:

* Alle design rules in een nieuwe patch versie zullen dezelfde resultaten opleveren als eerdere patch versies binnen de minor release
  * Dit betekent dat de compliance checks draaien op de nieuwe patch versie dezelfde score oplevert
* Bestaande design rules in een nieuwe minor versie zullen dezelfde resultaten opleveren als eerdere minor versies binnen de major release.
Nieuwe design rules in een minor versie kunnen in een kleine minderheid resulteren in nieuwe issues
  * Dit betekent dat in de meeste gevallen de compliance checks draaien op de nieuwe versie, deze meestal dezelfde score oplevert.
  Echter, er kunnen situaties zijn waar bestaande APIs op enkele nieuwe regels niet direct compliant zijn.
  Als dit het geval is, zal dit in de minderheid van bestaande APIs zijn
* Design rules in een nieuwe major versie kunnen andere resultaten opleveren
Hierbij wordt de impact afgewogen ten opzichte van de waarde van de nieuwe design rule.
Dit kunnen zowel nieuwe design rules die een verwachte grote impact hebben, of wijzigingen aan bestaande design rules.

## Waarom wordt hier afgeweken van strict Semantic Versioning?

Het doel van Semantic Versioning is om inzicht te krijgen in de potentiele impact van een nieuwe versie voor de eindgebruiker.
Het versienummer is een communicatiemiddel tussen de maintainer en gebruiker.
Een Major version geeft een signaal af aan de gebruiker dat er een grote impact wordt verwacht.

Deze standaard bevat design rules die limiterend zijn in welke keuzes beheerders van APIs kunnen nemen.
Dit betekent dat keuzes van beheerders in het verleden mogelijk niet meer toe gestaan worden op basis van nieuwe inzichten.
Als Semantic Versioning strict wordt gevolgd, dan resulteert dit in (zeer) frequente Major releases, aangezien nieuwe regels potentieel bestaande APIs non-compliant kunnen maken.
Het gevolg is dat elke nieuwe design rule van deze standaard een Major release introduceert.
Dit is in strijd met de intentie van Semantic Versioning, omdat hiermee de verwachtingen voor gebruikers onduidelijk wordt.
Niet alle nieuwe design rules hebben dezelfde impact, sommige mogelijk helemaal geen (bijvoorbeeld als er gesproken word over "industry-standard").

Om beheerders van APIs zo goed mogelijk te informeren over de impact van wijzigingen wordt er dus gekeken naar potentiele praktische impact in plaats van theoretische impact.
Deze praktische impact wordt bepaald op basis van input van beheerders van bestaande APIs via de, door de governance bepaalde, relevante gremia.
Hierbij is het speerpunt dat impact voor beheerders duidelijk moet zijn zodat inschattingen voor planning en prioritisering haalbaar zijn.
Deze impact inschatting is onhaalbaar als elke release een nieuwe Major version zou opleveren.

Al met al zorgt dit ervoor dat de intentie van een release begrijpelijk is voor API beheerders.
