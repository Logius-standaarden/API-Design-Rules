# Digikoppeling-koppelvlakstandaarden en voorschriften

## Overzicht

De Digikoppeling Architectuur legde in de eerdere versies grote nadruk op bevragingen en meldingen en legde een verband tussen deze iteractiepatronen en de onderliggende standaarden, ('WUS voor bevragingen, ebMS voor meldingen en kennisgevingen'). Dit verband bleek in de praktijk niet altijd werkbaar of wennselijk. In 2020 is daarom besloten om de richtlijnen voor het toepassen van de Digikoppeling standaarden te wijzigen. 

> `TODO`: check consistentie met andere hoofdstukken 

<del>`Bevragingen en meldingen` - eventueel in combinatie met grote berichten - bieden door hun verscheidenheid aan profielen en opties de logistieke bouwstenen om diverse interactiepatronen te realiseren.</del> 

Digikoppeling kent <del>drie</del>vier koppelvlakstandaarden 

- WUS voor <span style="color:green"> synchrone uitwisseling van gestructeerde berichten</span><del> bevragingen; </del>

- ebMS2 voor <span style="color:green"> asynchrone uitwisseling </span><del> meldingen; </del>

- Restful API voor synchrone uitwsseling, de focus ligt op het bevragen en bewerken van resources;

- Grote berichten voor het uitwisselen van grote bestanden;

De Digikoppeling-koppelvlakstandaarden beschrijven verschillende profielen. Elk profiel biedt een combinatie van kenmerken die in een bepaalde functionele behoefte voorziet.

De volgende profielen zijn onderkend:

- Best effort – geschikt voor `bevragingen` <del> (WUS en ebMS2) </del><sup>[*](#f*)</sup>

- Betrouwbaar (reliable) – geschikt voor `meldingen` <del> (ebMS2) </del>`

<sup><a name="f*"><dfn>*</dfn></a>: Zie 5.4.4. ebMS2 voor vragen met een uitgesteld antwoord</sup>

Deze komen in de volgende varianten voor:

- Standaard (niets) – best effort of reliable

- Signed – geschikt voor de ondertekening van berichten

- Encrypted – geschikt voor de versleuteling van de payload en attachments (bericht-niveau security)

Door het gebruik van deze profielen worden deze aspecten correct afgehandeld en kunnen partijen sneller een koppelvlakstandaard implementeren.

| Onderdeel | Toelichting|
|---|---|
| Koppelvlakstandaard WUS | het gebruik van WUS <del> voor bevragingen </del><span style="color:green"> synchrone uitwisseling van gestructureerde berichten </span> en de WUS profielen.|
| Koppelvlakstandaard ebMS2 | Het gebruik van ebMS2 <del> voor meldingen </del> <span style="color:green"> asynchrone uitwisseling </span> en de ebMS2 profielen|
|Koppelvlakstandaard Restful API| Het gebruik van Restful APIs voor het synchroon raadplegen en bewerken van resources|
| Koppelvlakstandaard Grote Berichten | Voor de uitwisseling van grote berichten maakt gebruik van WUS met HTTPS bestandsoverdracht of ebMS2 met HTTPS bestandsoverdracht |
| Beveiligingstandaarden en voorschriften  | Beschrijft de beveilingstandaarden (TLS, signing en encryption) voor de Digikoppeling profielen WUS, ebMS2 en Grote berichten |
| Identificatie en Authenticatie | Beschrijft de identificatie van partijen, het opzetten van een tweezijdige beveiligde TLS-verbinding en over het ondertekenen  en versleutelen van berichten en bijlagen. |
| Overzicht Actuele Documentatie en Compliance | Overzicht van de actuele versie van de  Digikopeling specifcaties (normatief en niet-normatief)  |
| Gebruik en Achtergrond Digikoppeling Certificaten | Beschrijft de werking en gebruik van PKIoverheid Certificaten (niet-normatief) |

Tabel 3: Digikoppeling-standaarden

## Digikoppeling-voorschriften

Enkele afspraken over de functionaliteit van Digikoppeling hebben betrekking op de Digikoppeling-keten als geheel waar behalve de koppelvlakstandaarden ook partijen, intermediairs e.d. een onderdeel van vormen. En voor elke keten geldt dat deze ‘zo sterk is als de zwakste schakel’.

Onderstaande voorschriften gelden voor de hele Digikoppeling-keten. Partijen moeten er in hun eigen organisatie voor zorgen dat hun systemen, applicaties en toegang voor gebruikers aan de eisen voldoen.

| Aspect | Voorschrift | Toepassing en uitleg |
|---|---|---|
| Identiteit, authenticatie en autorisatie | Identificatie en authenticatie van partijen (ook intermediairs) vindt plaats in overeenstemming met het beleid hiervoor. Zowel service aanbieder als service afnemer moeten overeenkomstig afspraken autoriseren. De autorisatie gebeurt op organisatieniveau, niet op medewerkerniveau. | Beleid staat uitgewerkt in het document “Digikoppeling Identificatie en Authenticatie”. Een praktische werkwijze is uitgewerkt in het document “Gebruik en achtergrond Digikoppeling certificaten”. Autoriseren kan afhankelijk van noodzaak tweezijdig afgesproken worden. Immers bijvoorbeeld ook het stellen van een vraag kan al vertrouwelijk zijn.                                                                                                                             |
| Betrouwbaarheid en beschikbaarheid (reliability)  | Alle componenten in de Digikoppeling-keten dienen de betrouwbaarheid en beschikbaarheid van het berichtenverkeer in de keten te handhaven, met name door het gebruik van een betrouwbaar profiel. Het gaat hier specifiek om de betrouwbare aflevering van berichten via reliable messaging (het gaat dus niet om de beschikbaarheid of betrouwbaarheid van de applicaties in de keten). | Een betrouwbaar profiel garandeert dat een bericht met zekerheid (precies één keer) wordt afgeleverd en dat berichten zo mogelijk in de juiste volgorde worden afgeleverd, ook als de ontvanger tijdelijk niet beschikbaar is. Tussenliggende intermediairs maar ook de Digikoppeling-adapters bij de partijen zullen deze garanties moeten handhaven om zinvol toegepast te kunnen worden. Dit stelt eisen aan de inrichting en eventueel intern transport. Dit geldt met name voor de betrouwbare profielen. |
| Traceerbaarheid | De berichtenstroom is traceerbaar via elke schakel in de logistieke keten.  | Elke schakel in de Digikoppeling-keten moet inkomende en uitgaande berichten monitoren, loggen en moet voorzien in een audittrail.  Dit geldt met name voor de betrouwbare profielen.  |
| Foutafhandeling  | Fouten worden correct en tijdig afgehandeld. Uitval van meldingen wordt zoveel mogelijk voorkomen, mede door het gebruik van een betrouwbaar profiel.  | Elke schakel in de Digikoppeling-keten moet foutafhandeling inrichten.  Dit geldt met name voor de betrouwbare profielen. |

Tabel 4: Digikoppeling-voorschriften

## Restful Api's

Het Digikoppeling REST-API profiel is gebaseerd op de REST-API Design rules die in 2020 door het Kennisplatform API's is ontwikkeld. 

Een application programming interface (API) is een gestructureerd en gedocumenteerd koppelvlak voor communicatie tussen applicaties. In de laatste 10 jaar heeft Representational state transfer (REST) zich ontwikkeld tot een bepalend principe voor het realiseren van API's.

De standaard REST-API Design Rules geeft een verzameling basisregels voor structuur en naamgeving waarmee de overheid op een uniforme en eenduidige manier REST-API's aanbiedt. Dit maakt het voor ontwikkelaars gemakkelijker om betrouwbare applicaties met te ontwikkelen met API's van de overheid.

De KVS API biedt de volgende functionaliteiten:

> `TODO:` wacht op input DK API Profiel

- Identificatie en authenticatie van partijen

- Foutmeldingen

- ...

## OAS: OpenAPI Specification 

Een OpenAPI Specification (OAS) beschrijft de eigenschappen van de data die een API als input accepteert en als output teruggeeft. OAS 3.0 specificeert alleen welke attributen de API verwerkt en hun datatypen, niet welke implementatie er achter de API schuilgaat.

Voor het beschrijven van DK-Rest API's is het gebruik van OAS veplicht. Op de Pas-toe-leg-uit lijst van het Forum Standaardisatie staat beschreven welke versie toegepast moet worden.  

## WUS

### WUS familie van standaarden

Digikoppeling maakt gebruik van een familie van standaarden die we binnen Digikoppeling de naam “WUS” geven. Deze familie van standaarden is gebaseerd op webservice standaarden uit de profielen van de OASIS “Web Services – Basic Reliable and Secure Profiles” Technical Committee (WS-BRSP)<sup>[27](#f27)</sup>. De naam WUS staat voor WSDL, UDDI en SOAP, drie belangrijke deelstandaarden. Hoewel Digikoppeling geen gebruik van UDDI maakt is deze term inmiddels gebruikelijk.

Kenmerkend voor de WUS-standaarden die voortkomen uit de Internet-wereld is de 1-op-n relatie tussen service aanbieder en meerdere service afnemers. Dit betekent b.v. dat een WUS service één WSDL heeft die door alle afnemers kan worden gebruikt.

<sup><a name="f27"><dfn>27</dfn></a>: Voorheen Web Services Interoperability (WS-I) organization</sup> 

### <span style="color:green"> Digikoppeling </span> WUS <del> voor bevragingen </del>

De Digikoppeling-koppelvlakstandaard WUS (KVS WUS) ondersteunt het uitvoeren van <del> bevragingen </del> <span style="color:green"> synchrone requests </span> tussen geautomatiseerde informatiesystemen.

De KVS WUS biedt de volgende functionaliteiten: <del> voor bevragingen: </del>

- Identificatie en authenticatie van partijen

- Versleutelen van transport

- Adresseringsinformatie voor routering ‘achter de voordeur’

- Routeren via message-handlers

- Berichtuitwisseling vast leggen in standaard technisch contract formaat

- Beveiligen van berichten d.m.v. technische handtekening

- Beveiligen van berichten door de content te versleutelen

- Foutmeldingen

### WSDL: Web Services Description Language

Een WSDL is een formeel xml-document om de gebruikte functionele en technische eigenschappen van de berichtuitwisseling via WUS vast te leggen. Elke service heeft één WSDL, die door de serviceaanbieder wordt opgesteld. Deze is door alle afnemers te gebruiken. Door importeren van de WSDL in de Digikoppeling-adapter van een afnemer wordt de berichtuitwisseling geconfigureerd.

De wijze waarop een WSDL wordt toegepast staat beschreven in Digikoppeling Best Practices WUS.

## ebMS

### ebMS2 familie van standaarden

Digikoppeling maakt  gebruik van een familie van standaarden die we “ebMS2” noemen. Deze familie van standaarden is gebaseerd op web-service standaarden uit de profielen van de OASIS “ebXML Messaging Services“ Technical Committee (ebMS2).

Kenmerkend voor de ebMS2-standaarden die voortkomen uit de EDIFACT-wereld is de 1-op-1 relatie tussen een beperkt aantal (vaak twee) partijen. Dit betekent dat twee partijen samen een CPA moeten afspreken, creëren en implementeren; de CPA is dus van zowel de serviceaanbieder als de serviceafnemer.

### <span style="color:green"> Digikoppeling </span> ebMS2 <del> voor meldingen </del>

De Digikoppeling-koppelvlakstandaard ebMS2 (KVS ebMS2) ondersteunt het uitvoeren van <span style="color:green"> asynchrone berichten </span><del> meldingen </del> tussen geautomatiseerde informatiesystemen.

Het protocol regelt de betrouwbare ontvangst van een bericht en eventueel de onweerlegbaarheid (non-repudiation) in de vorm van een ondertekende ontvangstbevestiging. Hoewel Digikoppeling-meldingen (op de logistieke laag) asynchroon zijn kan de business-laag wel synchroon werken als de verzender wacht op een retourmelding.`

De KVS ebMS2 regelt de volgende functionaliteiten: <del> voor meldingen </del>:

- Identificatie en authenticatie van partijen

- Versleutelen van transport

- Adresseringsinformatie voor routering ‘achter de voordeur’

- Routeren via message-handlers

- Asynchroon berichten correleren d.m.v. message ID

- Meerdere berichten logisch samenvoegen

- Berichten voorzien van een beveiligde datum en tijdstempel (time-stamping)

- Berichtuitwisseling vast leggen in standaard technisch contract formaat (servicecontract)

- Beveiligen van berichten d.m.v. technische handtekening

- Beveiligen van berichten door de content te versleutelen

- Onweerlegbaarheid op protocolniveau (non-repudiation)

- Betrouwbaar asynchroon berichten versturen met ontvangstbevestigingen

- Ondersteuning voor foutafhandeling op asynchrone berichten

- Volgorde van berichten zo mogelijk handhaven

- Hertransmissies op protocolniveau totdat ontvangst is bevestigd

### CPA

Een CPA is een formeel xml-document om de gebruikte functionele en technische eigenschappen van de ebMS2 protocol-karakteristieken vast te leggen. Het is dus een formele beschrijving voor het vastleggen van de gegevensuitwisseling. Een CPA moet worden gecreëerd als twee partijen afspreken om van elkaars ebMS2 services gebruik te maken. Beide partijen moeten de CPA importeren in hun Digikoppeling-adapter om deze te configureren voor de berichtuitwisseling.

De wijze waarop een CPA wordt toegepast staat beschreven in Digikoppeling Best Practices ebMS2. Het CPA Register ondersteunt partijen in het creëren van een CPA.

<del>
### ebMS2 voor vragen met een uitgesteld antwoord
In sommige sectoren wordt een vraag verstuurd met ebMS2 en komt het
(uitgestelde) antwoord ook via ebMS2 retour. Deze vorm van uitwisseling is asynchroon en voldoet dus niet aan de definitie voor `bevragingen`, omdat een `bevraging` synchroon is. Digikoppeling biedt hiervoor meldingen. Bij dit type gebruik is de betrouwbaarheid eigenlijk overbodig. Het ebMS2 best effort profiel van de koppelvlakstandaard ebMS2 kan ook voor dit type vragen met uitgestelde antwoorden worden gebruikt, als partijen dit onderling afspreken. Dit gebruik wordt niet op landelijk of intersectoraal niveau toegestaan en is dus uitsluitend optioneel binnen sectoren.`
</del>

## Grote berichten

### Werking grote berichten

De situatie kan zich voordoen dat een WUS, Restful API, en/of ebMS2 bericht een grootte krijgt die niet meer efficiënt door de WUS / ebMS2 / Restful API adapters en services verwerkt kan worden. Ook kan er behoefte zijn aan het buiten de normale procesgang ('out-of-band') sturen van aanvullende informatie naar systemen. In die gevallen zal dit “grote bericht” op een andere wijze verstuurd moeten worden: middels de Digikoppeling koppelvlakstandaard Grote Berichten.

De volgende standaard aanpak wordt hierbij gehanteerd:

- Met WUS of ebMS2 wordt referentie (link) verstuurd; 

> `TODO`: hier ook Restful API vermelden?

- de referentie verwijst naar de locatie van het grote bestand. Het hangt af van het  gebruikte Digikoppeling Grote berichten profiel of de ontvanger het bestand moet downloaden of dat de zender het grote bestand inmiddesl als naar de ontvanger heeft geupload.

Het grote bericht zelf zal vaak volledig in het grote bestand zijn opgenomen; het WUS of ebMS2 bericht bevat dan alleen metadata (waaronder de link naar het bestand). Maar het kan ook gebeuren dat een klein deel van het oorspronkelijk grote bericht al in het WUS-bericht is opgenomen en de rest (bijvoorbeeld bijlagen bij het bericht) in een of meerdere bestanden is opgenomen.

Het principe dat Digikoppeling grote berichten toepast is het ‘claim-check’ principe. Dit betekent dat het bericht zelf (WUS of ebMS2) 

> `TODO:`komt er ook een Restful API invulling van GB?

alleen een referentie (claim-check) naar het grote bestand bevat. Deze referentie wordt vervolgens gebruikt om het bestand zelf op te halen.

Een belangrijk voordeel hiervan is dat het grootste deel (het grote bestand zelf) de berichtenuitwisseling niet verstoort doordat het niet door de message-handler afgehandeld hoeft te worden (en deze bijvoorbeeld vertraagt). Maar ook is een voordeel dat de afhandeling van het grote deel op een ander moment in de tijd kan plaatsvinden en daardoor de procesgang van achterliggende informatiesystemen niet verstoord.

De standaard doet geen uitspraak over gegevensstromen waarin kleine en grote berichten voorkomen. Bij implementatie van dergelijke gegevensstromen zal een organisatie moeten afwegen of kleine berichten anders of gelijk aan de ‘echte’ grote berichten verwerkt worden. In z’n algemeenheid zal een uniforme afhandeling eenduidiger en vooral ook eenvoudiger zijn; slechts in bijzondere gevallen zal dit niet volstaan.

### Standaarden voor grote berichten

De *Digikoppeling Koppelvlakstaard Grote Berichten* (KVS GB) maakt gebruik van WUS en ebMS2 

> `TODO`: zie eerder opmerking over evt toevoegen van API voor GB

 voor het verzenden van metadata. Voor ophalen van het grote bestand maakt de standaard gebruik van HTTPS-downloads. Daardoor zijn reliability en security gelijkwaardig aan WUS en ebMS2. Ook is het gebruik van transparante intermediairs mogelijk.

De KVS GB regelt de volgende functionaliteiten <del> voor meldingen of bevragingen </del>, in aanvulling op WUS of ebMS2 

> `TODO`: zie eerder opmerking over evt toevoegen API voor GB

- Identificatie en authenticatie van partijen (OIN)

- Versleutelen van transport

- Routeren via (http) proxies

- Bestand correleren aan bericht

- Ondersteuning voor foutafhandeling

- Na onderbreking hervatten waar de overdracht is afgebroken (‘resume’)

- Optioneel beperkte tijdsperiode om bestand beschikbaar te stellen.
