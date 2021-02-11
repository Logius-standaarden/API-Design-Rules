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

## Architectuurprincipes `todo check`

De architectuurprincipes geven richting aan de Digikoppeling-standaarden en Digikoppeling-voorzieningen en zijn afgeleid van de NORA Principes (zie bijlage C):

1. **Interoperabiliteit:** De interoperabiliteit van diensten is mogelijk door het gebruik van bewezen interoperabele internationale standaarden.

2. **Standaardoplossingen:** Het gebruik van standaardoplossingen is mogelijk, met een minimum aan ontwikkelinspanning of maatwerk.

3. **Veiligheid en vertrouwelijkheid:** Gegevens worden veilig uitgewisseld conform de eisen van de toepasselijke wet en regelgeving. Wanneer berichten met persoonsgegevens verstuurd worden, moet de serviceafnemer nagaan of de uitwisseling voldoet aan de wet- en regelgeving (in het bijzonder de AVG ).

4. **Betrouwbaarheid:**  berichtaflevering is betrouwbaar indien nodig.

5. **Ontkoppeling:** De ontkoppeling van diensten wordt mogelijk door de verantwoordelijkheid van de logistieke laag, de transportlaag en de bedrijfsproceslaag strikt te scheiden.
