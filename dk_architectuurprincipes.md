# Digikoppeling-architectuurprincipes

## Uitgangspunten

<details>
  <summary>let op: Principe 4 is gewijzigd. Waarom?</summary>
  > Principe 4 is vervangen door een gewijzigd principe 4. Er moet nog een check worden uitgevoerd op de NORA.
</details>

De volgende uitgangspunten vormen de basis voor de uitwerking van deze architectuur:

1. De Digikoppeling standaarden zijn openbaar, vindbaar, transparant, leveranciersonafhankelijk en interoperabel. Zie bijlage D voor uitleg.

2. De Digikoppeling-standaarden ondersteunen veilige gegevensuitwisseling voor:
   - synchrone en asynchrone uitwisseling;
   - op berichten of op resources gebaseerde uitwisseling;
   - best effort of reliable uitwisseling;
   - uitwisselen van grote berichten;

> `TODO: is bovenstaande lijstje compleet? toe te voegen patronen kunnen bijvoorbeeld zijn: stateful/stateless, push/pull, enz.`

<del>op basis van `meldingen` (ebMS2) , `bevragingen` (WUS)   of in combinatie met grote berichten (GB).`</del>

3. Partijen kunnen kiezen welk interactiepatroon nodig voor gegevensuitwisseling. <del>`meldingen en/of bevragingen`</del>, afhankelijk van hun behoefte. Partijen bepalen in onderling overleg welke <del> WUS- of ebMS2-</del> Digikoppeling profiel ze gebruiken.

<del> 4. Basisregistraties en landelijke voorzieningen moeten beide koppelvlakstandaarden ondersteunen<sup>[12](#f12)</sup>. Mochten de serviceafnemers voldoende hebben aan één van de koppelvlakstandaarden, dan kan de aanbieder zich tot deze koppelvlakstandaard beperken. </del>

4. Basisregistraties en landelijke voorzieningen bepalen welke koppelvlakstandaard gebruikt wordt door een door hun geleverde dienst. Per dienst kunnen meerdere koppelvlakstandaard gebruikt worden.

<del><br><sup><a name="f12"><dfn>12</dfn></a><del> Serviceafnemers kunnen hierdoor ebMS gebruiken voor zowel bevragingen (binnen de sector), meldingen als grote berichten. </del></sup></del>

In vorige versies van de Digikoppeling Architectuur werden profielen gekoppeld aan bevragingen en meldingen. Dit voorschrift bleek in de praktijk niet meer goed bruikbaar. Vandaar dat met ingang van versie `xx` deze relatie is komen te vervallen.

## Architectuurprincipes

De architectuurprincipes geven richting aan de Digikoppeling-standaarden en Digikoppeling-voorzieningen en zijn afgeleid van de NORA Principes (zie bijlage C):

1. **Interoperabiliteit:** De interoperabiliteit van diensten is mogelijk door het gebruik van bewezen interoperabele internationale standaarden.

2. **Standaardoplossingen:** Het gebruik van standaardoplossingen is mogelijk, met een minimum aan ontwikkelinspanning of maatwerk.

3. **Veiligheid en vertrouwelijkheid:** Gegevens worden veilig uitgewisseld conform de eisen van de toepasselijke wet en regelgeving. Wanneer berichten met persoonsgegevens verstuurd worden, moet de serviceafnemer nagaan of de uitwisseling voldoet aan de wet- en regelgeving (in het bijzonder de ~~WBP~~<span style="color:green"> AVG </span>).

4. **Betrouwbaarheid:** Berichtuitwisseling is betrouwbaar indien nodig.

5. **Ontkoppeling:** De ontkoppeling van diensten wordt mogelijk door de verantwoordelijkheid van de logistieke laag, de transportlaag en de bedrijfsproceslaag strikt te scheiden.

## Interoperabiliteit

**Principe:** De interoperabiliteit van diensten is mogelijk door het gebruik van bewezen interoperabele internationale standaarden.

**Rationale:** Door het gebruik van internationale open standaarden is het eenvoudiger en goedkoper om gegevens onderling uit te wisselen. Dit volgt uit de NORA en <del>het European Interoperability Framework (IDABC)</del>.

**Invulling:** 
> `TODO: Zowel IEF 2.0 als het European Framwork 2.0 zijn verouderd en vervangen door de  'New' EIF en de de EIRA. Onderbouwing moet daarom worden vernieuwd`  

<del>Het European Interoperability Framework 2. 0 maakt gebruik van een conceptueel model voor de levering van publieke diensten . In dit model is de *Secure Data Exchange/Management* laag verantwoordelijk voor de veilige uitwisseling van diensten en informatie. Deze laag regelt de veilige uitwisseling van gecontroleerde en betrouwbare berichten, documenten, formulieren en ander informatiedragers tussen verschillende systemen. Naast het transport van gegevens moet deze laag ook specifieke beveiligingsaspecten regelen zoals elektronische handtekeningen, certificaten, encryptie en tijdregistratie.<sup>[13](#f13)</sup></del>


Deze laag wordt in de Nederlandse publieke sector ingevuld door Digikoppeling. Digikoppeling maakt hiervoor gebruik van twee internationale families van open standaarden voor webservices:<sup>[14](#f14)</sup> en RESTful API's,een architectuurstijl gebaseerd op het gebruik van resources en de standaarden HTTP en JSON.  

- ebXML en op de logistieke laag met name ebMS2;

- WS-\*familie: WUS (WSDL, UDDI en SOAP), inclusief WS-Security, WS-Addressing enzovoort.

> `TODO`: hier iets over ADR (HTTP/JSON)?

De ebMS2 standaard wordt door OASIS ([www.oasis.org](https://www.oasis.org)) beheerd, de WUS profielen door OASIS en de onderliggende WUS standaarden door W3c ([www.w3c.org](https://www.w3c.org)).<sup>[15](#f15)</sup>

**Gevolg:** Digikoppeling schrijft ebMS2-, WUS-standaarden en de Nederlandse API Design Rules voor in de vorm van de Digikoppeling-koppelvlakstandaarden en profielen. Organisaties kunnen hiermee effectief, snel en veilig berichten uitwisselen.

<br>
<br><del><sup><a name="f13"><dfn>13</dfn></a> Annex II - EIF (European Interoperability Framework) of the Communication “Towards interoperability for European public services” on the 16th of December 2010.</sup></del>

<br><sup><a name="f14"><dfn>14</dfn></a> EIF 1.0. Het begrip webservices is een algemeen concept dat gerelateerd is aan Service georiënteerde architectuur. Zowel WUS als ebMS werken volgens dit concept. Omdat de WS-\* familie voortbouwt op de basisstandaarden WSDL, UDDI en SOAP, wordt deze familie wel aangeduid met WUS.</sup>

<br><del><sup><a name="f15"><dfn>15</dfn></a> Voor de toepassing binnen Digikoppeling is in eerste instantie de beperking van die twee families overgenomen; de andere families hebben onvoldoende relevantie voor de Europese en Nederlandse overheid om afwijking van dit kader te rechtvaardigen.</sup></del>

## Gebruik standaardoplossingen (minimum aan maatwerk)

**Principe:** Het gebruik van standaardoplossingen is mogelijk, met een minimum aan benodigde ontwikkelinspanning of maatwerk.

**Rationale:** Door gebruik te maken van standaard software die de internationale standaarden ondersteunen wordt gegevensuitwisseling eenvoudiger, duurzamer en goedkoper. Ook wordt het beheer eenvoudiger.

**Invulling:** Eén van de belangrijkste eisen die de NORA stelt aan de inrichting van generieke voorzieningen is dat de gebruikers (de overheidsorganisaties) geen maatwerk nodig hebben omdat ze standaard software kunnen gebruiken, *bij voorkeur open source*.

**Gevolg:** Omdat organisaties geen maatwerk nodig hebben beperkt de investering tot de initiële inrichting, de implementatie en het beheer.

## Veiligheid en vertrouwelijkheid

**Principe:** Gegevens worden veilig uitgewisseld conform de eisen van de toepasselijke wet en regelgeving.

**Rationale:** Er zijn diverse redenen om gegevens veilig en vertrouwelijk uit te wisselen. De <span style="color:green"> Algemene verordening gegevensbescherming (AVG) </span><del> Wet Bescherming Persoonsgegevens (WBP) </del> verplicht adequate maatregelen om de veiligheid en vertrouwelijkheid van (persoons)gegevens te bewaken. Partijen die onderling gegevens uitwisselen moeten hier afspraken over maken. De Wet Elektronische Handtekeningen bepaalt de rechtsgeldigheid van berichten die ondertekend zijn met een geldige digitale handtekening. Naast deze wetgeving zijn er ook andere wetten en beleidskaders die eisen stellen aan beveiliging en uitwisseling van gegevens.

Wanneer het gaat over veiligheid en vertrouwelijkheid zijn ook de Wet politiegegevens (informatiedeling met derden) en de Archiefwet van belang.

**Invulling:** Digikoppeling borgt de vertrouwelijkheid en integriteit van berichten gedurende de berichtuitwisseling. De afspraken van Digikoppeling richten zich met name op de aspecten vertrouwelijkheid, integriteit en onweerlegbaarheid. Hiermee vult Digikoppeling de verantwoordelijkheid rond veiligheid en vertrouwelijkheid in.

**Gevolg:** Berichten worden veilig uitgewisseld wanneer de berichtuitwisseling aan de Digikoppeling-standaarden voldoet. Bij de uitwisseling van gegevens via Digikoppeling is de afnemer verantwoordelijk voor het juist gebruik van de ontvangen gegevens. De aanbieder dient de wettelijk basis (doelbinding) van de afnemer om gegevens te mogen ontvangen te toetsen.

**Details:**

De belangrijkste beveiligingseisen zijn:

- Identiteit en authenticatie: Een serviceaanbieder moet de identiteit van de serviceafnemer eenduidig en betrouwbaar kunnen vaststellen. Andersom wil de serviceafnemer ook zeker weten dat hij bij de goede serviceaanbieder is.

- Autorisatie: De autorisatie wordt (al dan niet) verleend op het niveau van de organisatie. De autorisatie voor het gebruik van een service is een verantwoordelijkheid van de serviceaanbieder. Autorisatie kan door de wet verplicht zijn gesteld. De afnemer is verantwoordelijk voor het borgen dat ontvangen gegevens alleen door geautoriseerde gebruikers kunnen worden gebruikt.

- De vertrouwelijkheid, integriteit en onweerlegbaarheid van het bericht worden op protocolniveau geborgd (dus tussen systemen). Daarbuiten moeten partijen maatregelen treffen om deze aspecten te waarborgen.

- Beveiliging van de transportlaag (point-to-point security) is randvoorwaardelijk: Beveiliging van het verkeer tussen twee (eind-)punten vindt plaats door middel van tweezijdig Transport Layer Security<sup>[16](#f16)</sup>.


Digikoppeling stelt het gebruik van het PKIoverheid certificaten verplicht voor de authenticatie van partijen en voor de versleuteling en ondertekening van berichten. Deze eisen gelden voor de Digikoppeling-keten en de Digikoppeling-standaarden. Dit onderwerp is nader uitgewerkt in het document ‘Digikoppeling Identificatie en Authenticatie’. Zie ook het *NORA Katern Informatiebeveiliging* (NORA 3.0) voor een nadere uitleg.

<br><sup><a name="f16"><dfn>16</dfn></a> Dit is een randvoorwaarde die Digikoppeling stelt aan de transportlaag. Zie de Koppelvlak-standaarden voor de versienummers van de gebruikte protocollen.</sup>

## Betrouwbaarheid

> `TODO:` opties tussen transportprotocol en in businesslaag  verduidelijken 

**Principe:** De berichtuitwisseling is betrouwbaar indien nodig.

**Rationale:** Betrouwbaarheid betekent een goede aflevering van berichten. Zie ook NORA BP09.

**Invulling:** Dit principe wordt ingevuld met <del>meldingen</del> het ebMS profiel, dat een reliable variant kent. De verzender is verantwoordelijk voor de goede aflevering van gegevens (d.m.v. berichten) en kan hiervoor een betrouwbaar Digikoppeling-profiel gebruiken.

> `TODO`: moet de volgende nieuwe zin - zie hieronder-, hier of als voetnoot worden vermeld? 

Naast betrouwbaarheid op Transportprotocol niveau, kan dit principe ook worden ingevuld in de businesslaag door het uitwisselen van controleberichten.

**Gevolg:** Een betrouwbaar profiel garandeert dat een bericht met zekerheid (slechts één keer) wordt afgeleverd en dat berichten zo mogelijk in de juiste volgorde worden afgeleverd, ook als de partner tijdelijk niet beschikbaar is. Berichtuitwisseling is traceerbaar.

**Details:**

- Een bericht is pas betrouwbaar afgeleverd als de verzender een ontvangstbevestiging heeft gehad van de ontvanger.

- Een ontvangstbevestiging wordt pas gegeven als gegarandeerd kan worden dat het bericht niet meer verloren gaat. Dit stelt eisen aan de inrichting bij de ontvanger, bijvoorbeeld in de vorm van persistent storage en betrouwbare doorlevering ‘achter de voordeur’.

- NB: zodra berichten buiten de Digikoppeling-keten komen, vervalt de betrouwbaarheid die de protocollen garanderen.

- Betrouwbare ebMS2-profielen gebruiken een ‘reliability contract’ (CPA voor ebMS2) tussen verzender en ontvanger.

- De berichtuitwisseling wordt bewaakt door middel van monitoring, foutafhandeling en vastgelegd via een audittrail.

- In de audittrail worden berichten individueel geregistreerd op datum en tijdstip<sup>[17](#f17)</sup>/(sequence of message)id/ontvangstbevestiging en eventueel foutcodes. Tevens worden de verzendende en ontvangende services vastgelegd.

- Het is mogelijk om berichtvolgorde op protocolniveau te regelen, maar dit is beperkt tot en met ontvangst door de adapter; daarna is de berichtvolgorde niet meer zichtbaar. Om die reden is het aan te raden om de berichtvolgorde aan te geven door middel van volgnummers in het bericht zelf of iets vergelijkbaars. Partijen kunnen dit onderling afspreken.

<br><sup><a name="f17"><dfn>17</dfn></a> Om de tijd correct te registreren is de algemeen geaccepteerde best practice dat servers gebruikmaken van Netwerk Time Protocol (NTP). NTP is een protocol voor de synchronisatie van klokken van computers via een netwerk op basis van een gemeenschappelijke tijd (meestal UTC – gecoördineerde wereldtijd).</sup>

## Ontkoppeling

**Principe:** Digikoppeling maakt ontkoppeling mogelijk door de verantwoordelijkheid van de logistieke laag, de transportlaag en de bedrijfsproceslaag strikt te scheiden.

**Rationale:** De semantische afspraken (inhoud van het bericht) kennen grote diversiteit. Daarnaast zijn er procesmatige aspecten zoals kwaliteit, interne routering en afhandeling die niet door Digikoppeling worden ingevuld omdat ze niet generiek van aard zijn. Hierover kunnen partijen onafhankelijk van de logistieke aspecten afspraken maken. Door vergaande ontkoppeling ontstaat een grotere mate van flexibiliteit, waardoor de standaard breder ingezet kan worden en daarmee de efficiency van de overheid bevordert.

**Invulling:** Digikoppeling maakt ontkoppeling van services mogelijk door de logistieke aspecten zoals adressering, routering en beveiliging op generieke wijze in te vullen.

**Gevolg:** Dit maakt Digikoppeling als standaard generiek van aard en dus breder toepasbaar.