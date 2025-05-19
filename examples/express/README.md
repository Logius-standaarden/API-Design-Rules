# Express example

Dit project gebruikt Express: <https://expressjs.com/>, een JavaScript framework waarmee onder andere API's kunnen worden gebruikt.

Om het project te bouwen en een `openapi.json` te genereren, run het volgende:

```shell script
npm ci
node src/server.js
# In een ander terminal tab, omdat de server nog draait
curl --silent http://localhost:8080/openapi.json > generated/openapi.json
```

Dit download een `generated/openapi.json` op basis van de definities in [`src/server.js`](src/server.js).
Daar kun je de verscheidene middleware calls bekijken die gebruikt worden om API's te documenteren.

Met deze middleware calls voldoet het example aan alle regels van de API Design Rules.
