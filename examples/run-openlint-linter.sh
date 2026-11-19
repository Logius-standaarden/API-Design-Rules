#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

openlint lint --ruleset $CURRENT_DIRECTORY/../media/linter.yaml $1
