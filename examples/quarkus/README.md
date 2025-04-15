# Quarkus example

Dit project gebruikt Quarkus: <https://quarkus.io/>, een Java framework waarmee onder andere API's kunnen worden gebruikt.

Om het project te bouwen en een `openapi.json` te genereren, run het volgende:

```shell script
./mvnw package
```

Dit genereert `target/generated/openapi/openapi.json` op basis van de classes in [`src/main/java/org/acme/`](src/main/java/org/acme/).
Daar kun je de verscheidene annotations bekijken die gebruikt worden om API's te documenteren.
Tevens is er enkele configuratie vereist in [`src/main/resources/application.properties`](src/main/resources/application.properties) om Quarkus goed in te stellen.

Met deze annotations en configuratie voldoet het example aan alle regels van de API Design Rules.
