# Digikoppeling Architectuur 2.0

HTML versie: [Architectuur2.0-metRestfulAPI](https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/snapshot.html)

In dit project wordt een nieuwe versie van het Digikoppeling Architectuur document ontwikkeld. De aanleiding van de vernieuwing is tweeledig: in 2019 is een RFC ingediend over relatie van de Digikoppeling profielen met *bevragen en melden*. Daarnaast wordt in 2020 een Rest API profiel uitgewerkt en opgenomen in de Digikoppeling Standaard.

Als basis voor het nieuwe document wordt de huidige versie van de Digikoppeling Architectuur gebruikt. Bij  de bespreking van de RFC over melden en bevragen werd al geconcludeerd dat de impact van deze change op het bestaande architectuurdocument groot was. Omdat dit jaar (2020) op verzoek van het TO Digikoppeling een Restful APi profiel wordt opgenomen in de standaard is, is besloten om deze beide grote onderdelen in één keer in een nieuw document te verwerken.

## Wat wijzigt in de nieuwe architectuur

- Overzicht profielen (toevoegen DK Profiel voor RESTful API's)
- Overzicht transactiepatronen (nieuw)
- Rollen: End-to-end, verwerker, intermediair, SAAS dienstverlener (herziening)
- Overzicht use cases (nieuw)
- Hoe gaan we om met de nadruk op Bevragingen en Meldingen in het huidge documen?
    Moeten we deze begrippen handhaven of niet meer noemen? Of vervangen door:
  - push/pull
  - synchroon/asynchroon
  - best effort/betrouwbaar

## Integrale versie

De gehele versie van het document staat hier :  [Architectuur2.0-metRestfulAPI](https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/). Deze versie is  opgemaakt in [Respec](https://github.com/w3c/respec/wiki).

## Indeling in hoofdstukken

Onderstaande indeling is concept. Dit kan nog op alle punten wijzigen.

|#|Hoofdstuk| Opmerkingen | Todo/Doing |
|-|---|---|---|
|1|[Doel van het document en leewijzer](dk_doel_document.md)|||
|2|[Wat is Digikoppeling](dk_wat_is_digikoppeling.md)||**gestart**<br>vraag: Wat moeten we doen met de referentie naar de Nora Servicegerichte architectuur. De Nora is heeft de servicegericht architectuur naar het archief verwezen en onderzoekt de rol van APi's |
|3|[Digikoppeling Architectuurprincipes](dk_architectuurprincipes.md)| aanpassing ivm RFC bevragen en melden|**gestart**|
|4|[Digikoppeling Keten](dk_keten.md)||**gestart** <br>toegevoegd transactiepatronen uit EDUkoppeling ter illustratie en verduidelijken rollen|
|5|[Koppelvlakstandaarden en voorschriften](dk_koppelvlakstandaarden_en_voorschriften.md)||**gestart** <br>opnemen verwijzing naar het nieuwe Digikoppeling Restful API profiel|
|6|[Digikoppeling voorzieningen](dk_voorzieningen.md)||**gestart**|
|7|[Digikoppeling Use cases](dk_usecases.md)| dit is een nieuw hoofdstuk|input van gebruikers|
|8|[Implementatie aspecten](dk_implementatie.md)||**gestart**|
|B1|[Bijlage Bronnen](dk_bijlage_bronnen.md)|||
|B2|[Bijlage begrippen](dk_bijlage_begrippen.md)|||
|B3|[Bijlage Nora Architectuurprincipes](dk_bijlage_nora_architectuur_principes.md)|||
|B4|[Bijlage Niet functionele eisen](dk_bijlage_niet_functionele_eisen.md)|||

## TODO's
|#|tekst| todo|
|-|---|---|
|2|..met Digikoppeling kan een serviceaanbieder met één interface al zijn serviceafnemers bedienen...De implementatie van Digikoppeling (en de bijbehorende investering) is eenmalig.|is dit  nog het geval?|
|2|referentie aan de NORA|De NORA richt zicht ook steeds meer op halen bij de bron en raadt het gebruik van API sterk aan.  Onderstaande alinea is aan vervanging toe|
|3|De Digikoppeling-standaarden ondersteunen veilige gegevensuitwisseling voor...|is bovenstaande lijstje compleet? toe te voegen patronen kunnen bijvoorbeeld zijn: stateful/stateless, push/pull, enz.|
|3|IEF,EIF |Zowel IEF 2.0 als het European Framwork 2.0 zijn verouderd en vervangen door de  'New' EIF en de de EIRA. Onderbouwing moet daarom worden vernieuwd |
|3|principe betrouwbaarheid|opties tussen transportprotocol en in businesslaag  verduidelijken|
|3|betrouwbaarheid ... in de businesslaag|moet de volgende nieuwe zin - zie hieronder-, hier of als voetnoot worden vermeld? |
|3|Digikoppeling maakt hiervoor gebruik van twee internationale families...|hier iets over ADR (HTTP/JSON)?|
|4|rollen|Er is grote behoefte om de rollen nader uit te werken. Dit kan in een aparte paragraaf of als verdere aanvulling op de vorige paragraaf|
|4|op business-niveau is er een veelheid aan uitwisselingsvormen...|s bovenstaande zin nog actueel?|
|4|Invulling van de behoefte met het aanbod|De oorspronkelijke paragraaf geskipt, nieuwe invulling is nodig|
|4|Overzicht transactiepatronen (nieuw)|nu de koppeling met bevraging en melding is losgelaten is het wel nodig om te beschrijven in welke situatie je Digikoppeling kan en moet gebruiken. Het gaat in dit hoofdstuk nog om de patronen. In het hoofdstuk usecases willen we graag praktijkvoorbeelden beschrijven.|
|4|Digikoppeling-bevragingen en -meldingen|Plaatje herzien |
|4|Bilaterale uitwisseling|Plaatje moet mogelijk worden herzien omdat in de plaat de nadruk ligt op berichten|
|5|Digikoppeling-koppelvlakstandaarden en voorschriften|check consistentie met andere hoofdstukken|
|5|Restful Api's|wacht op input DK API Profiel|
|5|Werking grote berichten|hier ook Restful API vermelden?|
|5|Werking grote berichten|komt er ook een Restful API invulling van GB?|
|5|Standaarden voor grote berichten|zie eerder opmerking over evt toevoegen van API voor GB (2x)|
|7|Overzicht Use Cases|Het voorstel is om hier succesvolle (of minder geslaagde) best practices te vermelden van werkende Digikoppeling Koppelvlakken.Hiervoor is **input** nodig van gebruikers!|
|8|Selectie van profielen|Tabel met de verschillende API, WUS en ebMS profielen langslopen|
|8|Selectie van profielen|aspecten keuze voor een profiel herzien|
|8|Berichtinhoud en semantiek|hier nog een detailbeschrijving van een REST-API uitwisseling?|







