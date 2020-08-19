# Digikoppeling Architectuur 2.0

HTML versie: [Architectuur2.0-metRestfulAPI](https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/)

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

|#|Hoofdstuk| Opmerkingen | Todo |
|-|---|---|---|
|1|[Doel van het document en leewijzer](dk_doel_document.md)|||
|2|[Wat is Digikoppeling](dk_wat_is_digikoppeling.md)|||
|3|[Digikoppeling Architectuurprincipes](dk_architectuurprincipes.md)| aanpassing ivm RFC bevragen en melden||
|4|[Digikoppeling Keten](dk_keten.md)||toevoegen transactiepatronen en verduidelijken rollen|
|5|[Koppelvlakstandaarden en voorschriften](dk_koppelvlakstandaarden_en_voorschriften.md)||opnemen verwijzing naar het nieuwe Digikoppeling Restful API profiel|
|6|[Digikoppeling voorzieningen](dk_voorzieningen.md)|||
|7|[Digikoppeling Use cases](dk_usecases.md)| dit is een nieuw hoofdstuk|input van gebruikers|
|8|[Implementatie aspecten](dk_implementatie.md)|||
|B1|[Bijlage Bronnen](dk_bijlage_bronnen.md)|||
|B2|[Bijlage begrippen](dk_bijlage_begrippen.md)|||
|B3|[Bijlage Nora Architectuurprincipes](dk_bijlage_nora_architectuur_principes.md)|||
|B4|[Bijlage Niet functionele eisen](dk_bijlage_niet_functionele_eisen.md)|||
