# Implementatie van Digikoppeling

## Architectuuraspecten van de aansluiting op Digikoppeling

Om gebruik te maken van Digikoppeling zijn een aantal zaken van belang. Zo dient u met uw partners afspraken te maken over de gegevensuitwisseling die via Digikoppeling plaats vindt. Ook dient u in uw organisatie een Digikoppeling-adapter te implementeren waarmee de koppelvlakken worden ingericht. Deze alinea beschrijft enkel de architectuur-aspecten van de aansluiting op Digikoppeling. Meer informatie over de aansluiting zelf vindt u op [https://www.logius.nl/digikoppeling/](https://www.logius.nl/digikoppeling/).

### Afspraken over de inhoud en interactie van de uitwisseling

Om tot uitwisseling van gegevens te kunnen komen, moeten de uitwisselende partijen afspraken maken over de inhoud en vorm van de gegevensuitwisseling.

Denk hierbij aan de volgende onderwerpen:

- Welk doel heeft de gegevensuitwisseling?

- Welke gegevens worden uitgewisseld?

- Wie is de bronhouder van de gegevens?

- Hoe verloopt de gegevensuitwisseling? Worden gegevens bilateraal uitgewisseld of via een intermediair of knooppunt?

- Welke vorm van interactie wordt gebruikt? Meldingen, bevragingen en/of grote berichten?

- Zijn de service contracten tussen de partijen gedefinieerd?

- Zijn de berichten, resources en/of interfaces gedefinieerd?

- Is er sprake van grote berichten (bestanden groter dan 20 MiB)?

- Worden er bijlagen meegestuurd?

- Zijn de eindpunten (endpoints) gedefinieerd?

- Maken de partijen gebruik van hetzelfde protocol? Indien nee, hoe wordt voorzien in de protocolvertaling?

- Welke profielen worden toegepast?
  - Betrouwbare (reliable)?
  - Ondertekend (signed)?
  - Versleuteld (encrypted)?

- Hoe worden berichten binnen de organisatie geadresseerd en gerouteerd?

- Gebruiken beide partijen dezelfde codering en karakterset (UTF-8 of Unicode)?

- Beschikken de betrokken partijen over elkaars publieke PKIoverheid sleutel?

### Digikoppeling-adapter

Organisaties die beschikken over eigen middleware (een enterprise servicebus, een broker of message handler, of een maatwerk applicatie) kunnen de Digikoppeling aansluiting in het algemeen realiseren door de juiste configuratie van deze producten. Anderen kunnen eenvoudig een van de vele Digikoppeling-adapters die in de markt worden geleverd aanschaffen.

ICT-leveranciers leveren standaard producten en/of diensten voor Digikoppeling. Ook bestaan er open source-oplossingen. Meestal bieden deze producten een Digikoppeling-adapter die vaak automatisch kan worden geconfigureerd conform de eisen van de Digikoppeling-koppelvlakstandaarden en Digikoppeling-profielen.

Per gegevensuitwisseling moet worden bepaald welk profiel het meest geschikt is. Als het profiel is gekozen (meestal door de serviceaanbieder) kan de keuze in een servicebeschrijving worden vastgelegd. Deze servicebeschrijving kunnen serviceaanbieder en (meerdere) serviceafnemers gebruiken om hun Digikoppeling-adapter automatisch te configureren. De volgende paragrafen gaan verder in op profielen en servicebeschrijvingen.

### Selectie van profielen

Vanwege interoperabiliteit, eenvoud en overzichtelijkheid onderscheidt
Digikoppeling per koppelvlakstandaard een aantal standaardprofielen. Elk profiel bestaat uit vooraf gedefinieerde keuzen over kenmerken als synchroniciteit, beveiliging en betrouwbaarheid voor REST API, WUS of ebMS2. Door toepassing van de Digikoppeling profielen worden deze kenmerken correct afgehandeld en kunnen partijen sneller een koppelvlakstandaard implementeren. De profielen worden nader gespecificeerd in de koppelvlakstandaarden WUS en ebMS2.

De volgende kenmerken zijn onderkend:

tiying-up- Best effort – geschikt voor bevragingen (WUS en REST API)

- Betrouwbaar (reliable) – geschikt voor meldingen (ebMS)

- Signed – geschikt voor de ondertekening van berichten (WUS en ebMS2)

- Encrypted – geschikt voor de versleuteling van de payload en attachments (WUS en ebMS2)

De aanduiding van de profielen kent de volgende systematiek:

- 2W = two-way

- be = best-effort

- rm = reliable

- S of s =signed

- SE of e =signed en encrypted

- osb= overheidsservicebus, de oude naam van Digikoppeling


| Invulling | DK REST API profiel | DK WUS profiel | DK ebMS2 profiel |
| --- | --- |---|---|
| Bevragingen / Meldingen |  |  |  |
| best-effort | 1.0 | 2W-be | osb-be |
| best-effort signed |  | 2W-be-S | osb-be-s |
| best-effort signed/encrypted |  | 2W-be-SE | osb-be-e |
|  |  |  |  |
| reliable |  |  | osb-rm |
| reliable signed |  |  | osb-rm-s |
| reliable signed en encrypted |  |  | osb-rm-e |


Tabel 9.1: Profielen in relatie tot Digikoppeling-voorschriften

*NB: De profielnamen komen uit eerdere versies van de koppelvlakstandaarden. Zij moeten gehandhaafd blijven in verband met het feit dat deze standaarden reeds in gebruik zijn bij vele organisaties. Dit verklaart de verschillen in de gebruikte afkortingen tussen de WUS- en ebMS2-profielen.*

Neem de volgende aspecten mee bij de keuze van een profiel:

- Gaat het om berichten (of bijlagen) groter dan 20 MiB? Stem eerst af met uw ketenpartner of Digikoppeling Grote Berichten gebruikt moet worden.

- Is snelheid belangrijker dan betrouwbaarheid? Kies dan voor een koppelvlakstandaard dat synchrone bevragingen ondersteunt, REST API of WUS.

- Is betrouwbaarheid belangrijker, kies dan voor een koppelvlakstandaard dat reliable messaging ondersteunt (ebMS).

- Bevind zich tussen partijen een niet vertrouwde (transparante) intermediair? Kies dan voor een Signed profiel.

- Mag een niet vertrouwde intermediair informatie niet inzien? Kies dan voor een Encyrpted profiel.

### Servicebeschrijvingen

Gestructureerde gegevensuitwisseling wordt vormgegeven door services. Een service bestaat uit een servicebeschrijving (een servicecontract) en berichtdefinitie waarmee de inhoud van een bericht is gespecificeerd. Deze worden op voorhand tussen partijen afgesproken en uitgewerkt.

De servicebeschrijving bevat de gemaakte afspraken over de kwaliteit en vorm van uitwisseling. De berichten of antwoorden van een service zelf zijn in een technisch formaat (XML bij WUS en ebMS, JSON bij REST API) beschreven. Servicebeschrijvingen worden opgesteld door een serviceaanbieder (bijvoorbeeld een basisregistratie).

Een servicecontract voor een ebMS2 service heet een CPA. Dit contract wordt afgesloten tussen de serviceaanbieder en serviceafnemer. Een CPA moet worden gecreëerd via het CPA-Register en wordt daarna ingelezen in de systemen van de serviceaanbieder en serviceafnemer.

Een servicecontract voor een WUS service heet een WSDL. Dit contract wordt afgesloten tussen de serviceaanbieder en serviceafnemer(s). Een WSDL voor een bevraging (synchrone request) kan door meerdere afnemers worden gebruikt. Een WSDL wordt door een aanbiedende partij opgesteld.

De beschrijving voor een REST API service heet een OAS. Deze beschrijving wordt opgesteld door de aanbieder van de service. Een OAS voor een API Servicecall kan door meerdere afnemers worden gebruikt.


### Gebruik van de Digikoppeling voorzieningen

Digikoppeling bestaat uit een set diensten, afspraken en ondersteunende voorzieningen. Die positionering bepaalt de manier waarop Digikoppeling omgaat met het verschil tussen productie en test.

Digikoppeling-voorzieningen ondersteunen het ontwikkelproces en maken daarom geen onderscheid tussen productie en test<sup>[30](#f30)</sup>. In de gegevensuitwisseling moeten organisaties hier wel onderscheid in maken. Wanneer er op een generieke infrastructurele component TLS-terminatie plaatsvindt, zal er in het algemeen slechts met productiecertificaten kunnen worden gewerkt. Dergelijke componenten worden ingezet voor zonering tussen niet-vertrouwde, semi-vertrouwde en vertrouwde netwerkzones. Keten- of pre-productietesten zullen in het algemeen gebruik kunnen maken van generieke infrastructuur.

Daarom geldt:

- De Digikoppeling-voorzieningen zijn bedoeld om te ondersteunen gedurende de ontwikkel- en testperiode.

- Certificaten voor productie wijken af van certificaten voor test doordat zij op verschillende ‘roots’ zijn gebaseerd, respectievelijk ‘PKI Root Staat der Nederlanden’ en ‘PKI TRIAL root’.

- Digikoppeling-koppelvlakstandaarden gelden (uiteraard) voor zowel productie als test.

<br><sup><a name="f30"><dfn>30</dfn></a>: Voorzover het de voorzieningen betreft die voor partijen benaderbaar zijn.</sup>

## Relatie met de inhoudelijke laag

### Waarom

Deze paragraaf legt zeer beknopt een relatie met de inhoudelijke laag van gegevensuitwisseling en beschrijft welke aspecten door partijen geregeld moeten worden om met Digikoppeling te kunnen werken. Digikoppeling is niet afhankelijk van deze laag maar het gebruik van Digikoppeling heeft weinig nut als deze aspecten niet zijn geregeld.

### Informatiebeveiliging

Partijen dienen zelf hun informatiebeveiliging vorm te geven en maatregelen te implementeren in de samenwerking met andere partijen. Daarbij dient rekening te worden gehouden met de keten van partijen, waaronder eventuele intermediairs. In de samenwerking dienen duidelijke afspraken te worden gemaakt met bewerkers over de verwerking van gegevens en over de maatregelen die hierin genomen dienen te worden.

### Bedrijfsprocessen

Partijen definiëren de uitwisseling tussen bedrijfsprocessen vanuit de optiek van de gebruiker en de vereiste doelbinding. Interoperabiliteit op bedrijfsprocesniveau vindt plaats bij de partijen zelf.

### Applicatielaag

Het gebruik van gegevens uit andere bronnen wordt intern binnen een organisatie op applicatieniveau vormgegeven. Sommige aspecten, zoals de versleuteling van berichten, kunnen via de applicatielaag worden ingeregeld indien gewenst.

### Berichtinhoud en semantiek

Digikoppeling gaat over de uitwisseling van gegevens. Binnen Digikoppeling wordt een bericht dat uitgewisseld wordt met WUS of ebMS conform de SOAP<sup>[31](#f31)</sup> messaging protocol samengesteld.

Bij het gebruik van het Digikoppeling REST API profiel is er geen sprake van  berichtuitwisseling. In dit profiel wordt een service met een Application Programming Interface (API) een resource aangeboden die door een gebruiker kan worden bevraagd of bewerkt, afhangend wat de API en de autorisatie eisen toelaat. De aanroep van een resource vindt plaats met HTTP-request. De HTTP-response bevat JSON of XML.

Een bericht (WUS of ebMS) bestaat uit de volgende onderdelen:

- Een bericht header (envelop)

- Een bericht payload (inhoud)

- Attachments (bijlagen)

Een bericht (WUS of ebMS) voldoet aan de volgende eisen:

- Alle berichten, zowel WUS als ebMS2, hebben een unieke identificatie. De gekozen structuur is geldig in de ebMS2-omgeving en in de WUS-omgeving. Zo kan dezelfde berichtidentificatie gebruikt worden in zowel een ebMS2-traject als op een voorafgaand of volgend WUS-traject. Een bepaald bericht kan daardoor direct ‘gevolgd’ worden. Gekozen is voor de structuur UUID\@URI.

- De payload van een bericht moet beschreven zijn in valide XML<sup>[32](#f32)</sup>

- Er moet een contract zijn met de afspraken over de te gebruiken services.

- Het gebruik van een standaard karakterset en standaard codering is verplicht.

Partijen maken onderling afspraken over de semantiek van de payload.

Berichtdefinities worden door partijen in overleg opgesteld. De semantische interoperabiliteit (d.w.z. de betekenis van de inhoud) wordt door partijen geborgd door zoveel mogelijk gebruik te maken van (bestaande) gegevensregisters, woordenboeken of catalogi. De standaarden StUF, Suwi-ML en NEN3610 zijn veelgebruikt hiervoor.

<br><sup><a name="f31"><dfn>31</dfn></a>: SOAP (Simple Object Access Protocol) is een [computerprotocol](http://nl.wikipedia.org/wiki/Protocol#Computerprotocol) dat wordt gebruikt voor communicatie tussen verschillende componenten van systemen.</sup>

<br><sup><a name="f32"><dfn>32</dfn></a>: Attachments mogen andere formaten hebben.</sup>

### Karakterset en codering

De karakterset en codering is in feite een zaak van de ‘inhoud’ en niet van de logistieke laag. Maar om interoperabiliteit te ondersteunen wordt door Digikoppeling voor alle uitwisselingen het gebruik van UTF-8 voor de codering voorgeschreven.

Voor de karakterset beperkt Digikoppeling zich tot Unicode 2.0 (ISO/IEC 10646), een brede internationale standaard. Niet alle applicaties kunnen de volledige set ondersteunen. Er zullen dus onderling afspraken gemaakt moeten worden over het gebruik van een eventuele subset van de karakterset.

## Relatie met de transportlaag

### Randvoorwaarden transport

Digikoppeling stelt ook randvoorwaarden op het niveau van het transport:

- Gebruik van HTTPS

- Gebruik van TCP/IP stack.

- Gebruik van HTTPS voor grote berichten.

- Gebruik van tweezijdig TLS voor het veilig transporteren van gegevens via internet  is verplicht.

Randvoorwaardelijk wil zeggen dat bovenstaande standaarden nodig zijn om Digikoppeling-koppelvlakstandaarden te kunnen gebruiken.

### Inleiding transportlaag

Deze paragraaf legt zeer beknopt een relatie met de beoogde oplossing voor de landelijke voorzieningen op de transportlaag. Die transportlaag regelt de TCP/IP-verbinding, wat geen onderdeel is van Digikoppeling. Dit is echter opgenomen om aan te geven waar deze lagen elkaar raken. Digikoppeling stelt enkele basale eisen aan het transport; deze zijn in deze paragraaf opgenomen.

### Transport Level Security (TLS)

Alle Digikoppeling-koppelvlakstandaarden schrijven het gebruik voor van (tweezijdig) TLS om de berichtenstroom te beveiligen. Het protocol TLS heeft betrekking op het communicatiekanaal. De Digikoppeling-koppelvlakstandaarden stellen deze eis dus aan de transportlaag.

In Digikoppeling is ervoor gekozen om PKIoverheid certificaten te gebruiken op het niveau van het communicatiekanaal (TLS) om de directe communicatiepartners te authenticeren (enkele hop). TLS kan niet toegepast worden om end-to-end authenticatie uit te voeren in een multi-hop omgeving; zie daarvoor beveiliging op berichtniveau (signed of signed en encrypted profielen).

Zie ‘*Digikoppeling beveiligingsstandaarden en voorschriften’* voor meer informatie over de door Digikoppeling vereiste beveiligingsstandaarden en cipher suites voor signing en encryptie.

### Netwerken

Digikoppeling is onafhankelijk van het onderliggende transportnetwerk.
Gegevensuitwisseling via Digikoppeling stelt wel enkele eisen aan het transport:

- Digikoppeling is gebaseerd op de TCP/IP stack, dus een TCP/IP transportnetwerk is noodzakelijk.

- Standaarden zijn gebaseerd op ‘bindings’ – verbindingen of connecties - naar Uniform Resource Identifiers (URI’s). Het netwerk moet de ‘DNS resolving’ <sup>[33](#f33)</sup>van de domeinnaam uit de URI regelen en de routering naar het resulterende IP-adres. Het netwerk en/of DNS-resolving mag ook een lokaal netwerk/host zijn.

- Digikoppeling past HTTPS. De netwerken (en firewalls) zullen daarom https-transport over TCP/IP moeten toestaan.

Om goed te functioneren heeft Digikoppeling dus alleen basale connectiviteit nodig.

 <br><sup><a name="f33"><dfn>33</dfn></a>: DNS ‘resolving’ is het opzoeken van de domeinnaam en het bijbehorend IP-adres, conform het DNS protocol.</sup>

### Diginetwerk

Diginetwerk levert de noodzakelijke beveiligde connectiviteit om elektronisch samen te kunnen werken met andere overheidsorganisaties via één standaard koppeling.

Diginetwerk bestaat uit een aantal gekoppelde besloten (koppel)netwerken van diverse samenwerkende overheden die met elkaar worden verbonden door een centrale voorziening (basiskoppelnetwerk). Voorbeelden van nationale koppelnetwerken zijn Gemnet, Suwinet en RINIS. Een internationaal koppelnetwerk is sTESTA. Organisaties die Diginetwerk willen gebruiken sluiten aan op een van de koppelnetwerken. Daarmee kunnen zij alle andere aangesloten organisaties bereiken.

Het voordeel daarvan is dat beschikbaarheid en beveiliging onder eigen beheer valt en dat toegang tot het netwerk gecontroleerd is. Door hergebruik van de aansluiting op Diginetwerk is de implementatie van connectiviteit met andere overheidsorganisaties eenvoudig te realiseren. Diginetwerk biedt een beheerde en afgesloten netwerk voor overheden en is dus een goed alternatief (t.o.v. internet) voor connectiviteit binnen de overheid.

### Internet

Internet is een openbaar netwerk waarop velen zijn aangesloten. Het gebruik van TLS en optioneel beveiliging op berichtniveau door Digikoppeling maakt dat het internet goed gebruikt kan worden.

Het voordeel van Internet is dat veel organisaties een aansluiting hierop hebben. Vaak zijn organisaties met vertrouwelijke gegevens en hoge eisen t.a.v. beschikbaarheid en beveiliging terughoudend in het gebruik van Internet hiervoor. Hoewel dus veel organisaties bereikbaar zijn via Internet is toegang tot gegevens niet altijd mogelijk.

De precieze verschillen tussen Diginetwerk en Internet vallen buiten de scope van Digikoppeling en worden hier niet verder beschreven.
