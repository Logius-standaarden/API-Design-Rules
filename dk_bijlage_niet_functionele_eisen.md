# Bijlage D: Niet-functionele eisen 

Standaarden op de Pas-toe of leg uit lijst dienen te voldoen aan enkele niet-functionele eisen.

De volgende eisen zijn specifiek voor de Digikoppeling van belang:

- Ontkoppeling inhoud, logistiek en transport.

- Leveranciersonafhankelijke open standaarden.

- Interoperabiliteit.

- Vindbaarheid en openbaarheid: de standaarden en services zijn vindbaar, het beheerproces is openbaar.

## Ontkoppeling van de drie lagen

De drie lagen (inhoud, logistiek en transport) zijn in hoge mate ontkoppeld en dus onafhankelijk van elkaar. Afspraken over de inhoud van een bericht (payload) staan los van de logistieke laag. Organisaties kunnen dus op generieke wijze berichten uitwisselen, los van onderlinge afspraken over de inhoud.

Afspraken over de inhoud mogen de keuzes in de logistieke laag niet beïnvloeden en omgekeerd. De keuzes in de logistieke laag hebben op hun beurt geen invloed op de inrichting van de transportlaag (bijvoorbeeld transport over internet of eigen verbindingen).

In de context van webservices wordt de logistieke laag vaak gezien als hetzelfde als de envelop van een bericht (SOAP header). Ook in Digikoppeling maakt dit onderdeel uit van de logistieke laag. Daarnaast kan soms ook een deel van de envelop-inhoud (payload) tot de logistieke laag van Digikoppeling behoren. Dit geldt specifiek voor de metadata van Digikoppeling grote berichten.

De Digikoppeling-keten heeft geen actieve logistieke componenten tussen de adapters van de serviceafnemer en de serviceaanbieder. Performance, snelheid en beschikbaarheid worden alleen bepaald door het netwerk en door de serviceaanbieder.

## Leveranciersonafhankelijkheid

Om de interoperabiliteit te kunnen waarborgen is het essentieel dat
Digikoppeling en de koppelvlakstandaarden onafhankelijk zijn van
ICT-leveranciers. Dit is nodig om een ‘vendor lock-in’ en maatwerk te voorkomen: de functionaliteit wordt zoveel mogelijk geïmplementeerd met op de markt beschikbare software. Daarom worden de open standaarden van OASIS en W3C gebruikt. Deze organisaties beheren wereldwijde open standaarden, waaronder ebMS en WUS. Zie [www.oasis-open.org](http://www.oasis-open.org) voor meer informatie.

## Interoperabiliteit*

De Digikoppeling-standaarden en de Digikoppeling-voorzieningen waarborgen interoperabiliteit op het logistieke niveau van gegevensuitwisseling. Dit houdt in dat organisaties die zich conformeren aan de standaard en hier correct gebruik van maken, onderling gegevens kunnen uitwisseling door de standaard toe te passen. Op deze laag bevinden zich de afspraken betreffende transportprotocollen (HTTP), messaging (SOAP), adressering, beveiliging
(authenticatie en encryptie) en betrouwbaarheid. Digikoppeling maakt berichtenuitwisseling mogelijk op basis van de ebXML/ebMS en WUS-families van standaarden, inclusief bijbehorende andere standaarden. De voor Digikoppeling vereiste interoperabiliteit van de WUS standaarden van OASIS en W3C wordt gebaseerd op de profielen (en tests) van WUS, WS-RM, WS-Security etc.

De interoperabiliteit van ebMS is gebaseerd op de standaard ebMS versie 2 (ISO standaard) en de tests/certificering van Drummond.

Aangezien veranderingen tot nog toe bestonden uit uitbreidingen met nieuwe
(optionele) functionaliteit, voldoen ook de eerste implementaties aan de nieuwste versie.

## Vindbaarheid en openbaarheid

De standaard is vindbaar en toegankelijk op een laagdrempelige manier. De standaard en documentatie wordt gepubliceerd op de website van Logius: www.logius.nl/digikoppeling

De standaard is tevens vindbaar via de ‘Pas toe of leg uit’-lijst van het Forum
Standaardisatie: https://www.forumstandaardisatie.nl/open-standaarden.

Wijzigingen op de standaard worden conform het Beheermodel in openbaarheid besproken en beheerd.