#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

cd $CURRENT_DIRECTORY

# Bouw project
dotnet build

../run-spectral-linter.sh $(realpath generated/openapi.json)
