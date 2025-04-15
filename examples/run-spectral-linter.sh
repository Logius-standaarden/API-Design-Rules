#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

# Nodig vanwege https://github.com/stoplightio/spectral/issues/2675
if ! [ -f "$1" ]; then
  echo "Generated $1 does not exist"
  exit 1
fi

spectral lint -r $CURRENT_DIRECTORY/../linter/spectral.yml $1
