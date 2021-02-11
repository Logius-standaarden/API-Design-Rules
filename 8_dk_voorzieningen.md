# Digikoppeling-voorzieningen

## Inleiding

Partijen zijn zelf verantwoordelijk voor de bereikbaarheid, inrichting van hun systemen en voor een correcte afhandeling van berichten. De consequentie is organisaties zelf hun deel van Digikoppeling moeten inrichten. Zij kunnen zich daarbij laten ondersteunen door ICT-leveranciers of een intermediair. Alle partijen kunnen gebruik maken van de Digikoppeling-voorzieningen.

De volgende Digikoppeling-voorzieningen ondersteunen het ontwikkel- en implementatieproces:

- het Digikoppeling Portaal met daarin de Compliancevoorziening,- WUS en ebMS2 voor het testen van services;

- het CPA Register voor het creëren van een CPA (tbv ebMS2 berichtuitwisseling);

- De Centrale OIN Raadpleegvoorziening (COR) voor het raadplegen van het OIN register. Het OIN staat voor het Organisatie Identificatienummer.

Digikoppeling adapters of applicaties kunnen worden getest op compliance met de koppelvlakstandaarden via de het Digikoppeling Portaal. Al deze voorzieningen zijn bereikbaar via [https://portaal.digikoppeling.nl](https://portaal.digikoppeling.nl).


| Functionaliteit  | Uitleg | Invulling |
|--------------------------------------------|---|---|
| Compliance WUS services | WUS services kunnen worden getest op compliance met de Digikoppeling-koppelvlakstandaard WUS.  | Digikoppeling Portaal -Compliancevoorziening WUS |
| Compliance ebMS2 services  | ebMS2 services kunnen worden getest op compliance met de Digikoppeling-koppelvlakstandaard ebMS2. | Digikoppeling Portaal -Compliancevoorziening ebMS2 |
| Compliance Grote Berichten | Grote berichten kunnen in combinatie met WUS of ebMS2 services worden getest op compliance met de koppelvlakstandaarden | Digikoppeling Portaal-Compliancevoorziening WUS en ebMS2 |
| CPA Register | Een CPA-contract voor ebMS2 services tussen twee partijen kan via het CPA Register worden opgesteld en beheerd. | CPA Register |
| OIN Register | Het OIN bevat alle uitgegeven Organisatie identificatienummers waarmee organisaties zich uniek identificeren bij het uitwisselen van berichten. | Digikoppeling Portaal – OIN Register (COR)                                   |


Tabel 8.1: Ondersteunende functionaliteiten van de Digikoppeling-voorzieningen

## Compliancevoorzieningen

Met de WUS compliancevoorziening kan een organisatie controleren of haar adapter of programmatuur voldoet aan de WUS koppelvlakstandaard. Met de ebMS2 compliancevoorziening kan een organisatie controleren of haar adapter of programmatuur voldoet aan de ebMS2 koppelvlakstandaard.

De volgende compliancevoorzieningen zijn beschikbaar: <sup>[28](#f28)</sup>

- Digikoppeling-WUS compliancevoorziening voor het testen van synchroon berichtenverkeer op basis van WUS, inclusief grote berichten.

- Digikoppeling-ebMS2 compliancevoorziening voor het testen van asynchroon berichtenverkeer op basis van ebMS2, inclusief grote berichten.

>Informatie over de compliancevoorzieningen staat op [https://portaal.digikoppeling.nl](https://portaal.digikoppeling.nl).

<sup><a name="f28"><dfn>28</dfn></a>: *Digikoppeling Koppelvlakstandaard WUS*</sup>

## OIN Register (Centrale OIN Raadpleegvoorziening)

Logius beheert de Centrale OIN Raadpleegvoorziening (COR) waarin uitgegeven Organisatie identificatienummers zijn gepubliceerd. Dit register is openbaar raadpleegbaar en zowel via het web als via een REST API bevraagbaar.

Het OIN register is te vinden op [https://register.digikoppeling.nl/registers](https://register.digikoppeling.nl/registers).

## CPA Register

Het CPA Register wordt gebruikt voor het opstellen van een CPA (servicebeschrijving) voor ebMS2 uitwisselingen. Een CPA is een formeel xml-document dat de functionele en technische eigenschappen van de ebMS2-protocolkarakteristieken vastlegt. Het is dus een format voor afspraken over de gegevensuitwisseling met ebMS2.<sup>[29](#f29)</sup>

Het CPA Register ondersteunt partijen bij het maken van een CPA (Collaboration Protocol Agreement). Een CPA kan om verschillende redenen zinvol zijn:

- Het is een formeel contract tussen twee partijen die op basis van ebMS2 gegevens willen uitwisselen.

- Het automatiseert de configuratie van de ebMS2 adapter (het inlezen van de CPA volstaat).

- Het biedt zekerheid dat beide partijen dezelfde instellingen gebruiken.

De wijze waarop een CPA wordt toegepast staat beschreven in Digikoppeling Best Practices ebMS2. Het CPA Register is beschreven in de Gebruikershandleiding. Het CPA register is te vinden op [https://cparegister.minvenj.nl](https://cparegister.minvenj.nl)

<br><sup><a name="f29"><dfn>29</dfn></a>: *Digikoppeling Best Practices ebMS*</sup
