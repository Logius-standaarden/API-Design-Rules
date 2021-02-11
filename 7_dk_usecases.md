# Overzicht Use Cases

In dit hoofdstuk beschrijven  we een aantal usecases waarbij er een specifiek Digikoppeling Koppelvlak vaak een voorkeur heeft.

Voordat er een keuze wordt gemaakt voor een koppelvlak uit de opties die Digikoppeling biedt, is het belangrijkste dat goed geanalyseerd wordt wat eigenlijk de aard is van de uit te wisselen gegevens of bestanden is en de context waarin deze keuze gemaakt dient te worden. Een keuze voor het een of ander is bij voorbaat eigenlijk nooit goed of fout te noemen. Het gaan om welke implementatie het beste past bij de requirements van de betrokken organisatie(s) en de beschikbare capabiliteiten binnen de organisatie. 


## Hulpmiddel voor een keuze voor een Digikoppeling Koppelvlak

Relevante vragen voor het maken van een keuze zijn:


### Hoeveel partijen zijn er betrokken bij de koppeling en wat is hun rol?

Voorbeelden:

- 1 service provider, n service consumers. Hier kan een service provider er voor kiezen meerdere koppelvlakstandaarden aan te bieden (bijvoorbeeld REST API en WUS).
- Many to many: Meerdere partijen die allemaal objecten kunnen versturen en ontvangen. Voor deze koppeling worden een REST API koppelvlak vaak gebruikt.  
- 1-op-1: twee partijen die onderling objecten uitwisselen. Hierbij kunnen partijen om een specifiek contract af te spreken, zoals in een CPA bij ebMS.  

### Wat is de aard van de gegevens/objecten die uitgewisseld moeten worden?

Voorbeelden:

- Niet nader gespecificeerde Pdfs die van A naar B moeten, met metadata 
- Hele grote Bestanden 

Hier kan Digikoppeling Grote Berichten (via ebMS of WUS) gebruikt worden. 

### Het uitwisselen van relationele bedrijfsgegevens over objecten, ‘Bedrijfsdocumenten’ 

Voorbeelden:

- de volledige gegevens van een GBA inschrijving of de gegevens van een rechtszaak 

Hier kan voor Digikoppeling WUS gekozen worden, omdat in deze uitwisseling vaak een gestructureerde berichtformaat wordt gehanteerd in combinatie met WSDL en XSD. Digikoppeling REST API is hiervoor ook mogelijk.

### Raadplegen of muteren van een bron

Voorbeelden:

- Een centrale website die een object opvraagt bij op een achterliggende bron. 
- Het aanmaken, bewerken of verwijderen van een publicatie op de Staatscourant.

Hier kan Digikoppeling REST API gebruikt worden. Digikoppeling WUS is hiervoor ook mogelijk.

## Andere overwegingen voor een keuze van een koppelvlak  
### Capabiliteit van een organisatie, bestaande infrastructuur

Wat zijn de capabiliteiten van de organisaties die met elkeaar gegevensuitwisselen. Bijvoorbeeld wordt er al gebruik gemaakt van Digikoppeling WUS of ebMS, of juist niet. beschikt de organisatie over eigen ontwikkelteam, of maakthet gebruik van een partner of leverancier.

- Zijn er al koppelingen in gebruik tussen partijen?.

  - Zo ja welke; als hergebruik mogelijk is, kan dat vaak voordelen opleveren omdat men al bekend is met de technieken en de beheerprocessen reeds op volwassen wijze ingericht zijn.

Dit kan een hele valide reden zijn om voor een bepaalde variant te kiezen, ook al zijn er technische argumenten te maken dat een ander type in theorie beter zou passen.

## Overzicht Usecase

### Overdracht van verantwoordelijkheid

Bij deze case gaat het om een overdracht van verantwoordelijkheden, zoals het bevoegd gezag -  bevoegd om besluiten te nemen over een onderwerp - van een overheidsorganisatie naar een andere organsatie. Hierbij is het essentieel dat beide partijen zekerheid over de de overdracht, omdat er bepaalde wettelijke termijnen kunnen bestaan waarin besluiten genomen moeten worden.  


|Koppelvlakspecificatie|Omschrijving|Praktijkvoorbeeld|
|---|---|---|
|Digikoppeling ebMS2| Digikoppeling ebMS kent een betrouwbaar profiel (osb-rm) dat de bevestiging van ontvangst borgt. Digikoppeling ebMS ondersteunt ook de mogeijkheid van onweerlegbaarheid (non-repudiation) in de vorm van een ondertekende ontvangstbevestiging  | formele overdracht van OLO/DSO naar bevoegd gezag |


Tabel 7.1: Overdracht van verantwoordelijkheid

### Abonneren op wijzigingen middels notificaties

Deze case is bedoeld voor ketens die authentieke informatie willen 'halen bij de bron' in plaats van het synchroniseren van registraties. Hiervoor is het essentieel dat organisaties worden genotificeerd bij wijzigingen.

![Notificatie Request](media/Notification_request.png "Notificatie Request")


|Koppelvlakspecificatie|Omschrijving|Praktijkvoorbeeld|
|---|---|---|
|Digikoppeling ebMS|Digikoppeling ebMS heeft reliable profiel (osb-rm) dat de bevestiging van ontvangst borgt. Hiermee heeft de aanbiedende partij de zekerheid dat een notificatie door de ontvanger is ontvanger| Digilevering ontvangt gebeurtenisberichten van basisregistraties en zendt deze door naar geabonneerde overheidsorganisaties |
|Digikoppeling REST API| Een client abonneert zich met POST request op wijzingen in een bepaalde bron van een Provider (en kan muteren met PUT of DELETE request). Een bronhouder informeert een abonnee met een POST request bij een wijzingen. De afnemer haalt de wijzingen op via een GET reequest.| VNG werkt aan afspraken voor decentrale notificatieservices |


Tabel 7.2: Notification request

### End-to-End security

Een bericht wordt beveiligd tussen de uiteindelijke consumer en de uiteindelijke provider, ook wanneer er zich intermediairs bevinden in het pad tussen die twee. Het betreft hier authenticatie van de consumerorganisatie, conform het Digikoppeling authenticatiemodel, waarbij alleen de identiteit van de consumerorganisatie relevant is(signing), en encryptie van het bericht (payload inclusief attachments) onderweg


|Koppelvlakspecificatie|Omschrijving|Praktijkvoorbeeld|
|---|---|---|
| Digikoppeling ebMS | Digikoppeling ebMS kent profielen voor signing en encryption. Digikoppeling ebMS ondersteunt ook de mogeijkheid van onweerlegbaarheid (non-repudiation) in de vorm van een ondertekende ontvangstbevestiging | |
| Digikoppeling WUS | Digikoppeling WUS kent profielen voor signing en encryption ||


Tabel 7.2: End-to-End security

### Betrouwbaar berichtenverkeer (reliable messaging)

Bij Betrouwbaar berichtenverkeer verstuurt de service-requester een bericht naar de ontvangende partij (ontvanger) en wacht op een (technische) ontvangstbevestiging. De verzendende (business) applicatie vertrouwt er op dat het bericht (betrouwbaar) afgeleverd wordt. De (business)applicatie zal niet wachten op het antwoord: deze applicatie zal het eventuele 'antwoordbericht' op een ander moment ontvangen en moeten correleren aan het oorspronkelijke vraag bericht.`


|Koppelvlakspecificatie|Omschrijving|Praktijkvoorbeeld|
|---|---|---|
|Digikoppeling ebMS | Digikoppeling ebMS kent profielen voor signing en encryption. (reliability out of the box). Retry maakt bijvoorbeeld onderdeel uit van dit protocol | |


Tabel 7.3: Betrouwbaar berichtenverkeer (reliable messaging)