# Overzicht ADR issue's

## Te bespreken in het eerste Technische Overleg van de Technische Architectuur Groep (TAG).

datum:	07-07-2021
auteur:	Martin van der Plas

Onderstaande lijst van Issue's is gegroepeerd op basis van de volgende tags:

- adm > Administratieve / normatieve en beschrijvende zaken die vooral voor eenduidige api's moeten zorgen (issue's voor Governance/Logius?)
- arch > architectuur vraagstukken (issue's voor de werkgroep Architectuur?)
- geo > specifieke geo vraagstukken (issue's voor de ADR subwerkgroep GEO?)
- sec > security vraagstukken (issue's voor de werkgroep Security?)
- ux > user experience vraagstukken. (hoe is de dialoog met de API's en de API/ADR documentatie?)
- 

De weight estimate is gebaseerd op de scrum weging in 1, 2, 3, 5, 8, 13, 20, 40, 100 punten om te duiden hoeveel impact en werk issue's hebben in relatie tot andere issue's.

De Prio is wat we als groep vast moeten stellen. Kortom: welke issue's willen we als eerste oppakken  (daarbij kunnen we afwegen of we bepaalde groepen of estimates van issue's eerst willen oppakken ).



| nr   | link                                           | toelichting                                                  | groep          | weight estimate | prio (voorstel) |
| ---- | ---------------------------------------------- | ------------------------------------------------------------ | -------------- | --------------- | --------------- |
| 394  | https://github.com/Geonovum/KP-APIs/issues/394 | API gedrag bij ongeldige query parameters                    | ux             | 3               | xxx             |
| 372  | https://github.com/Geonovum/KP-APIs/issues/372 | ADR extensie profielen                                       | adm arch       | 5               | xxxx            |
| 226  | https://github.com/Geonovum/KP-APIs/issues/226 | Allow YAML in p 3.15                                         | adm            | 2               | xxxx            |
| 222  | https://github.com/Geonovum/KP-APIs/issues/222 | risicoprofielen koppelen aan auth                            | auth  arch sec | 8               | xxxx            |
| 219  | https://github.com/Geonovum/KP-APIs/issues/219 | gevoelige parameters in api MP: deze discussie is toch beslecht? | sec ux         | 5               | xxxxx           |
| 215  | https://github.com/Geonovum/KP-APIs/issues/215 | versionering en data                                         | adm            | 3               | xxxx            |
| 259  | https://github.com/Geonovum/KP-APIs/issues/259 | gebruik x-headers                                            | ux             | 5               | xxxx            |
| 193  | https://github.com/Geonovum/KP-APIs/issues/193 | token based authorization                                    | sec            | 13              | xxx             |
| 225  | https://github.com/Geonovum/KP-APIs/issues/225 | use sunset deprication header fields                         | adm ux         | 8               | xx              |
| 188  | https://github.com/Geonovum/KP-APIs/issues/188 | http based signatures                                        | sec auth arch  | 20              | xx              |
| 187  | https://github.com/Geonovum/KP-APIs/issues/187 | rate limiting proposal                                       | arch ux        | 8               | xxxxx           |
| 184  | https://github.com/Geonovum/KP-APIs/issues/184 | spatial operator als value                                   | geo adm ux     | 8               | xx              |
| 180  | https://github.com/Geonovum/KP-APIs/issues/180 | tijdreizen                                                   | adm ux         | 40              | xx              |
| 177  | https://github.com/Geonovum/KP-APIs/issues/177 | defineer formaat header warnings                             | adm ux         | 5               | xx              |
| 164  | https://github.com/Geonovum/KP-APIs/issues/164 | Algemene lijst bronnen en definities                         | adm            | 3               | xxxxx           |
| 103  | https://github.com/Geonovum/KP-APIs/issues/103 | Autorisatiefouten                                            | sec ux         | 3               | xxxx            |
| 95   | https://github.com/Geonovum/KP-APIs/issues/95  | AVG vertrouwelijkheid en beveiliging                         | sec adm        | 8               | xxx             |
| 93   | https://github.com/Geonovum/KP-APIs/issues/93  | GEO Extensie                                                 | geo            | ?               | xx              |
| 45   | https://github.com/Geonovum/KP-APIs/issues/45  | Use ClientID as API key when supporting both API key and oAUTH | sec            | 13              | xxx             |
| 6    | https://github.com/Geonovum/KP-APIs/issues/6   | Gebruik HATEOAS                                              | adm ux         | 8               | xxxx            |
|      |                                                |                                                              |                |                 |                 |
|      |                                                |                                                              |                |                 |                 |
|      |                                                |                                                              |                |                 |                 |
|      |                                                |                                                              |                |                 |                 |

