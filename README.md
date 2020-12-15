# Digikoppeling Architectuur 2.0

HTML versie: [Architectuur2.0-metRestfulAPI](https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/)

Indien u een oudere browser gebruikt kunt u onderstaande link volgen: 
HTML-versie(static): [Architectuur2.0-metRestfulAPI](https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/static.html)

Een nieuwe versie van het Digikoppeling Architectuur document is ontwikkeld. De aanleiding van de vernieuwing is tweeledig: in 2019 is een RFC ingediend over relatie van de Digikoppeling profielen met *bevragen en melden*. Daarnaast wordt in 2020 een Rest API profiel uitgewerkt en opgenomen in de Digikoppeling Standaard.

De huidige versie van de Digikoppeling Architectuur dient als basis. Bij de bespreking van de RFC over melden en bevragen werd al geconcludeerd dat de impact van deze change op het bestaande architectuurdocument groot was. Omdat in 2020 op verzoek van het Technisch Overleg Digikoppeling een [*Rest API profiel*](https://centrumvoorstandaarden.github.io/DigikoppelingRestfulApiProfiel/) wordt opgenomen in de standaard is, is besloten om deze beide grote onderdelen in één keer in een nieuw document te verwerken.

## Wat wijzigt in de Digikoppeling Architectuur

- opheffen onderscheid tussen tussen 'WUS voor bevragingen' en 'ebMS voor meldingen' 
- toevoegen Profiel voor RESTful API's
- verder zijn kleine verbeteringen en updates doorgevoerd 

## Wat is er nieuw in de Digikoppeling Architectuur

- Overzicht transactiepatronen 
- Overzicht use cases

## Integrale versie

De gehele versie van het document staat hier :  [Architectuur2.0-metRestfulAPI](https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/snapshot.html). Deze versie is  opgemaakt in [Respec](https://github.com/w3c/respec/wiki).

## Indeling in hoofdstukken

|#|Hoofdstuk| Opmerkingen | Nieuwe informatie nav Openbare Consultatie |
|-|---|---|---|
|1|[Doel van het document en leeswijzer](dk_doel_document.md)|ongewijzigd||
|2|[Wat is Digikoppeling](dk_nieuwe_scope.md)|Een nieuwe paragraaf over de scope van Digikoppeling is toegevoegd. Verwijzingen naar de NORA zijn aangepast. De Nora heeft de servicegerichte architectuur naar het archief verwezen en onderzoekt de rol van APi's.|    |
|3|[Digikoppeling Architectuurprincipes](dk_architectuurprincipes.md)| Aanpassing in de principes vanwege de RFC op bevragen en melden. Uitwerking van de principes verwijderd, omdat een aantal verwijzingen verouderd waren.||
|4|[Digikoppeling Keten](dk_keten.md)|In dit hoofdstuk is de koppeling tussen bevragen met WUS en Melden met ebMS verwijderd| |
|5|[Transactiepatronen in Digikoppeling](dk_transactiepatronen.md)|Dit is een nieuw hoofdstuk, waarin dankbaar gebruik is gemaakt van de transactiepatronen uit EDUkoppeling. Ter illustratie en verduidelijken van de rollen zijn hier sequencediagrammen aan toegevoegd.|  |
|6|[Koppelvlakstandaarden en voorschriften](dk_koppelvlakstandaarden_en_voorschriften.md)|Hierin is een verwijzing opgenomen naar het nieuwe Digikoppeling Restful API profiel||
|7|[Digikoppeling Use cases](dk_usecases.md)| Dit is een nieuw hoofdstuk met verwijzing naar praktijkvoorbeelden. **oproep:** praktijkcases zijn welkom! |||
|8|[Digikoppeling voorzieningen](dk_voorzieningen.md)|kleine aanpassingen||
|9|[Implementatie aspecten](dk_implementatie.md)|kleine aanpassingen||
|10/B1|[Bijlage Bronnen](dk_bijlage_bronnen.md)|ongewijzigd||
|11/B2|[Bijlage begrippen](dk_bijlage_begrippen.md)|ongewijzigd||
|12/B3|[Bijlage Nora Architectuurprincipes](dk_bijlage_nora_architectuur_principes.md)|ongewijzigd||
|13/B4|[Bijlage Niet functionele eisen](dk_bijlage_niet_functionele_eisen.md)|ongewijzigd||

## Beslisboom: Geen onderdeel van de wijziging

Het Digikoppeling beheerteam van Logius ontwikkelt een vragenboom die een provider kan helpen bij de keuze voor een Digikoppeling profiel voor een koppelvlak. Het is geen onderdeel van de Digikoppeling Architectuur, maar op- en aanmerkingen zijn zeer zeker welkom. 

Digikoppeling Vragenboom: [Vragen Boom (concept)](https://github.com/centrumvoorstandaarden/Architectuur2.0-metRestfulAPI/blob/master/dk-vragenboom.pdf)





