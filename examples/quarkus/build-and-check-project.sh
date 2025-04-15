#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

cd $CURRENT_DIRECTORY

./mvnw --no-transfer-progress package

../run-spectral-linter.sh $(realpath target/generated/openapi/openapi.json)
