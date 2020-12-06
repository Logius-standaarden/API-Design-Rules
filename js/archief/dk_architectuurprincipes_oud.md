# Digikoppeling-architectuurprincipes

## Uitgangspunten

De volgende uitgangspunten vormen de basis voor de uitwerking van deze architectuur:

1. De Digikoppeling standaarden zijn openbaar, vindbaar, transparant, leveranciersonafhankelijk en interoperabel. Zie bijlage D voor uitleg.

2. De Digikoppeling-standaarden ondersteunen veilige gegevensuitwisseling voor:
   - synchrone en asynchrone uitwisseling;
   - berichtverkeer of op resources gebaseerde uitwisseling;
   - het uitwisselen van best effort of reliable overdracht;
   - het uitwisselen van grote berichten;

3. Partijen kunnen kiezen welk interactiepatroon nodig is voor gegevensuitwisseling.  afhankelijk van hun behoefte. Partijen bepalen in onderling overleg welke  Digikoppeling profiel ze gebruiken.

4. Providers, zoals Basisregistraties en landelijke voorzieningen, bepalen welke koppelvlakstandaard gebruikt wordt voor een door hun geleverde dienst. Per dienst kunnen meerdere koppelvlakstandaarden aangeboden worden.

In vorige versies van de Digikoppeling Architectuur werden specifieke profielen gekoppeld aan bevragingen en meldingen. Dit voorschrift bleek in de praktijk niet meer goed bruikbaar. Vandaar dat met ingang van versie `2.0` deze relatie is komen te vervallen.

## Architectuurprincipes

De architectuurprincipes geven richting aan de Digikoppeling-standaarden en Digikoppeling-voorzieningen en zijn afgeleid van de NORA Principes (zie bijlage C):

1. **Interoperabiliteit:** De interoperabiliteit van diensten is mogelijk door het gebruik van bewezen interoperabele internationale standaarden.

2. **Standaardoplossingen:** Het gebruik van standaardoplossingen is mogelijk, met een minimum aan ontwikkelinspanning of maatwerk.

3. **Veiligheid en vertrouwelijkheid:** Gegevens worden veilig uitgewisseld conform de eisen van de toepasselijke wet en regelgeving. Wanneer berichten met persoonsgegevens verstuurd worden, moet de serviceafnemer nagaan of de uitwisseling voldoet aan de wet- en regelgeving (in het bijzonder de AVG ).

4. **Betrouwbaarheid:** Berichtuitwisseling is betrouwbaar indien nodig.

5. **Ontkoppeling:** De ontkoppeling van diensten wordt mogelijk door de verantwoordelijkheid van de logistieke laag, de transportlaag en de bedrijfsproceslaag strikt te scheiden.

## Interoperabiliteit

**Principe:** De interoperabiliteit van diensten is mogelijk door het gebruik van bewezen interoperabele internationale standaarden.

**Rationale:** Door het gebruik van internationale open standaarden is het eenvoudiger en goedkoper om gegevens onderling uit te wisselen. 

**Invulling:**

**Gevolg:**


## Gebruik standaardoplossingen (minimum aan maatwerk)

**Principe:** Het gebruik van standaardoplossingen is mogelijk, met een minimum aan benodigde ontwikkelinspanning of maatwerk.

**Rationale:** Door gebruik te maken van standaard software die de internationale standaarden ondersteunen wordt gegevensuitwisseling eenvoudiger, duurzamer en goedkoper. Ook wordt het beheer eenvoudiger.

**Invulling:** Eén van de belangrijkste eisen die de NORA stelt aan de inrichting van generieke voorzieningen is dat de gebruikers (de overheidsorganisaties) geen maatwerk nodig hebben omdat ze standaard software kunnen gebruiken, *bij voorkeur open source*.

**Gevolg:** Omdat organisaties geen maatwerk nodig hebben beperkt de investering tot de initiële inrichting, de implementatie en het beheer.

## Veiligheid en vertrouwelijkheid

**Principe:** Gegevens worden veilig uitgewisseld conform de eisen van de toepasselijke wet en regelgeving.

**Rationale:** Er zijn diverse redenen om gegevens veilig en vertrouwelijk uit te wisselen. De  Algemene verordening gegevensbescherming (AVG) verplicht adequate maatregelen om de veiligheid en vertrouwelijkheid van (persoons)gegevens te bewaken. Partijen die onderling gegevens uitwisselen moeten hier afspraken over maken. De Wet Elektronische Handtekeningen bepaalt de rechtsgeldigheid van berichten die ondertekend zijn met een geldige digitale handtekening. Naast deze wetgeving zijn er ook andere wetten en beleidskaders die eisen stellen aan beveiliging en uitwisseling van gegevens.

Wanneer het gaat over veiligheid en vertrouwelijkheid zijn ook de Wet politiegegevens (informatiedeling met derden) en de Archiefwet van belang.

**Invulling:** Digikoppeling borgt de vertrouwelijkheid en integriteit van berichten gedurende de berichtuitwisseling. De afspraken van Digikoppeling richten zich met name op de aspecten vertrouwelijkheid, integriteit en onweerlegbaarheid. Hiermee vult Digikoppeling de verantwoordelijkheid rond veiligheid en vertrouwelijkheid in.

**Gevolg:** Berichten worden veilig uitgewisseld wanneer de berichtuitwisseling aan de Digikoppeling-standaarden voldoet. Bij de uitwisseling van gegevens via Digikoppeling is de afnemer verantwoordelijk voor het juist gebruik van de ontvangen gegevens. De aanbieder dient de wettelijk basis (doelbinding) van de afnemer om gegevens te mogen ontvangen te toetsen.

**Details:**

De belangrijkste beveiligingseisen zijn:

- Identiteit en authenticatie: Een serviceaanbieder moet de identiteit van de serviceafnemer eenduidig en betrouwbaar kunnen vaststellen. Andersom wil de serviceafnemer ook zeker weten dat hij bij de goede serviceaanbieder is.

- Autorisatie: De autorisatie wordt (al dan niet) verleend op het niveau van de organisatie. De autorisatie voor het gebruik van een service is een verantwoordelijkheid van de serviceaanbieder. Autorisatie kan door de wet verplicht zijn gesteld. De afnemer is verantwoordelijk voor het borgen dat ontvangen gegevens alleen door geautoriseerde gebruikers kunnen worden gebruikt.

- De vertrouwelijkheid, integriteit en onweerlegbaarheid van het bericht worden op protocolniveau geborgd (dus tussen systemen). Daarbuiten moeten partijen maatregelen treffen om deze aspecten te waarborgen.

- Beveiliging van de transportlaag (point-to-point security) is randvoorwaardelijk: Beveiliging van het verkeer tussen twee (eind-)punten vindt plaats door middel van tweezijdig Transport Layer Security.


Digikoppeling stelt het gebruik van het PKIoverheid certificaten verplicht voor de authenticatie van partijen en voor de versleuteling en ondertekening van berichten. Deze eisen gelden voor de Digikoppeling-keten en de Digikoppeling-standaarden. 
## Betrouwbaarheid

**Principe:** De gegevenswisseling is betrouwbaar indien nodig.

**Rationale:** Betrouwbaarheid betekent een goede aflevering van berichten of requests. Zie ook NORA BP09.

**Invulling:** Dit principe wordt ingevuld met het ebMS profiel, dat een reliable variant kent. De verzender is verantwoordelijk voor de goede aflevering van gegevens (d.m.v. berichten) en kan hiervoor een betrouwbaar Digikoppeling-profiel gebruiken.

Betrouwbaarheid op Transportprotocol niveau kan ook worden ingevuld in de businesslaag door het uitwisselen van controleberichten.

**Gevolg:** 

**Details:**

## Ontkoppeling

**Principe:** Digikoppeling maakt ontkoppeling mogelijk door de verantwoordelijkheid van de logistieke laag, de transportlaag en de bedrijfsproceslaag strikt te scheiden.

**Rationale:** De semantische afspraken (inhoud van het bericht) kennen grote diversiteit. Daarnaast zijn er procesmatige aspecten zoals kwaliteit, interne routering en afhandeling die niet door Digikoppeling worden ingevuld omdat ze niet generiek van aard zijn. Hierover kunnen partijen onafhankelijk van de logistieke aspecten afspraken maken. Door vergaande ontkoppeling ontstaat een grotere mate van flexibiliteit, waardoor de standaard breder ingezet kan worden en daarmee de efficiency van de overheid bevordert.

**Invulling:** Digikoppeling maakt ontkoppeling van services mogelijk door de logistieke aspecten zoals adressering, routering en beveiliging op generieke wijze in te vullen.

**Gevolg:** Dit maakt Digikoppeling als standaard generiek van aard en dus breder toepasbaar.
