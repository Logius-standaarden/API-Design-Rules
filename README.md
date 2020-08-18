# Digikoppeling Architectuur 2.0

In dit project wordt een nieuwe versie van het Digikoppeling Architectuur document ontwikkeld. De aanleiding van de vernieuwing is tweeledig: in 2019 is een RFC ingediend over relatie van de Digikoppeling profielen met *bevragen en melden*. Daarnaast wordt in 2020 een Rest API profiel uitgewerkt en opgenomen in de Digikoppeling Standaard.

Als basis voor het nieuwe document wordt de huidige versie van de Digikoppeling Architectuur gebruikt. Bij  de bespreking van de RFC over melden en bevragen werd al geconcludeerd dat de impact van deze change op het bestaande architectuurdocument groot was. Omdat dit jaar (2020) op verzoek van het TO Digikoppeling een Restful APi profiel wordt opgenomen in de standaard is, is besloten om deze beide grote onderdelen in één keer in een nieuw document te verwerken.

## Wat wijzigt in de nieuwe architectuur?
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
De gehele versie van dit document kan bekeken worden in [Respec](https://github.com/w3c/respec/wiki) template op  van het document: :  [Architectuur2.0-metRestfulAPI](https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/)

Onderstaande indeling is concept. Dit kan nog op alle punten wijzigen.

|#|hoofdstuk| md-bestand | opmerkingen |
|---|---|---|---|
|1| Doel van het document en leewijzer|[dk_doel_document.md](dk_doel_document.md)| |
|2| Wat is Digikoppeling|[dk_wat_is_digikoppeling.md](dk_wat_is_digikoppeling.md)|
|3| Digikoppeling Architectuurprincipes|[dk_architectuurprincipes.md](dk_architectuurprincipes.md)| aanpassing ivm RFC bevragen en melden|
|4| Digikoppeling Keten |[dk_keten.md](dk_keten.md)| toegevoegd transactiepatronen en verduidelijken rollen|
|5| Koppelvlakstandaarden en voorschriften| [dk_koppelvlakstandaarden_en_voorschriften.md](dk_koppelvlakstandaarden_en_voorschriften.md)| hierin wordt ook een verwijzing opgenomen naar het neuwe Digikoppeling REstful API profiel|
|6| Digikoppeling voorzieningen|[dk_voorzieningen.md](dk_voorzieningen.md)||
|7| Use cases|[dk_usecases.md](dk_usecases.md)| dit is een nieuw hoofdstuk|
|8| Implementatie aspecten|[dk_implementatie.md](dk_implementatie.md)||
|B1| Bronnen| [dk_bijlage_bronnen.md](dk_bijlage_bronnen.md)||
|B2| begrippen|[dk_bijlage_begrippen.md](dk_bijlage_begrippen.md)||
|B3| Nora Architectuurprincipes|[dk_bijlage_nora_architectuur_principes.md](dk_bijlage_nora_architectuur_principes.md)||
|B4| Niet functionele eisen|[dk_bijlage_niet_functionele_eisen.md](dk_bijlage_niet_functionele_eisen.md)||
