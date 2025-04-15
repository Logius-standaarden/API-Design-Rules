#!/bin/sh
./mvnw package

spectral lint -r ../../linter/spectral.yml target/generated/openapi/openapi.json
