# Digikoppeling Architectuur 2.0

- HTML-versie: [Architectuur2.0-metRestfulAPI](https://logius-standaarden.github.io/Digikoppeling-Architectuur/)
- HTML-versie(static): [Architectuur2.0-metRestfulAPI](https://logius-standaarden.github.io/Digikoppeling-Architectuur/snapshot.html)
- PDF-versie: [Architectuur2.0-metRestfulAPI](Digikoppeling-Architectuur.pdf)

Een nieuwe versie van het Digikoppeling Architectuur document is ontwikkeld. De aanleiding van de vernieuwing is tweeledig: in 2019 is een RFC ingediend over relatie van de Digikoppeling profielen met *bevragen en melden*. Daarnaast wordt in 2020 een Rest API profiel uitgewerkt en opgenomen in de Digikoppeling Standaard.

De huidige versie van de Digikoppeling Architectuur dient als basis. Bij de bespreking van de RFC over melden en bevragen werd al geconcludeerd dat de impact van deze change op het bestaande architectuurdocument groot was. Omdat in 2020 op verzoek van het Technisch Overleg Digikoppeling een [*Rest API profiel*](https://logius-standaarden.github.io/Digikoppeling-Architectuur/) wordt opgenomen in de standaard is, is besloten om deze beide grote onderdelen in één keer in een nieuw document te verwerken.

## Versie is vastgesteld door het Technisch Overleg

Deze versie is in maart 2021 vastgesteld door het TO. Logius stemt af met het Bureau Forum Standaardisatie of deze versie tezamen met het Digikoppeling REST API profiel kan worden verheven tot de meest recente versie.

Commentaar blijft overigens altijd welkom. Maak een issue aan in deze repository. Eerste keer? Hoe een issue moet worden aangemaakt vindt u [hier](https://github.com/Logius-standaarden/Openbare-Consultaties#issues-en-pull-requests-opmerkingen-maken-of-tekstvoorstellen-indienen).

## Wat wijzigt in de Digikoppeling Architectuur

- opheffen onderscheid tussen 'WUS voor bevragingen' en 'ebMS voor meldingen' 
- toevoegen profiel voor [Rest API](https://logius-standaarden.github.io/Digikoppeling-Architectuur/)

verder zijn kleine verbeteringen en updates doorgevoerd 

## Wat is er nieuw in de Digikoppeling Architectuur

- Overzicht transactiepatronen 
- Overzicht use cases

## Indeling in hoofdstukken

|#|Hoofdstuk| Opmerkingen | Nieuwe informatie nav Openbare Consultatie |
|-|---|---|---|
|1|[Doel van het document en leeswijzer](1_dk_doel_document.md)|ongewijzigd||
|2|[Wat is Digikoppeling](2_wat_is_digikoppeling.md)|Een nieuwe paragraaf over de scope van Digikoppeling is toegevoegd. Verwijzingen naar de NORA zijn aangepast. De Nora heeft de servicegerichte architectuur naar het archief verwezen en onderzoekt de rol van APi's.|    |
|3|[Digikoppeling Architectuurprincipes](6_3_dk_architectuurprincipes.md)| Aanpassing in de principes vanwege de RFC op bevragen en melden. Uitwerking van de principes verwijderd, omdat een aantal verwijzingen verouderd waren.||
|4|[Digikoppeling Keten](4_dk_keten.md)|In dit hoofdstuk is de koppeling tussen bevragen met WUS en Melden met ebMS verwijderd| |
|5|[Transactiepatronen in Digikoppeling](5_dk_transactiepatronen.md)|Dit is een nieuw hoofdstuk, waarin dankbaar gebruik is gemaakt van de transactiepatronen uit EDUkoppeling. Ter illustratie en verduidelijken van de rollen zijn hier sequencediagrammen aan toegevoegd.|  |
|6|[Koppelvlakstandaarden en voorschriften](6_dk_koppelvlakstandaarden_en_voorschriften.md)|Hierin is een verwijzing opgenomen naar het nieuwe Digikoppeling Restful API profiel||
|7|[Digikoppeling Use cases](7_dk_usecases.md)| Dit is een nieuw hoofdstuk met verwijzing naar praktijkvoorbeelden. **oproep:** praktijkcases zijn welkom! |||
|8|[Digikoppeling voorzieningen](8_dk_voorzieningen.md)|kleine aanpassingen||
|9|[Implementatie aspecten](9_dk_implementatie.md)|kleine aanpassingen||
|10/B1|[Bijlage Bronnen](a_dk_bijlage_bronnen.md)|ongewijzigd||
|11/B2|[Bijlage begrippen](b_dk_bijlage_begrippen.md)|ongewijzigd||
|12/B3|[Bijlage Nora Architectuurprincipes](c_dk_bijlage_nora_architectuur_principes.md)|ongewijzigd||
|13/B4|[Bijlage Niet functionele eisen](d_dk_bijlage_niet_functionele_eisen.md)|ongewijzigd||







