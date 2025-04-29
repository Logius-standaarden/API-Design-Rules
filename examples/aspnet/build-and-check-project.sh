#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

cd $CURRENT_DIRECTORY

# Bouw project
dotnet build

# Start the server als een background process
dotnet run &
SERVER_PID=$!

mkdir -p generated/
rm generated/openapi.json 2> /dev/null

# Haal de gegenereerde openapi.json op. Omdat de server nog
# moet opstarten slapen we 100 ms tussen elke call, totdat we
# een succesvolle response terug krijgen.
CURL_EXIT_CODE=1
while [ $CURL_EXIT_CODE -ne 0 ]
do
    sleep 0.1
    # Check of de server nog steeds draait. Als dat niet meer
    # zo is, stop dan onmiddelijk met checken en downloaden van
    # het openapi.json
    ps -p $SERVER_PID 1> /dev/null
    PROCESS_EXISTS=$(echo $?)
    if [ $PROCESS_EXISTS -ne 0 ]
    then
        echo "Server has crashed. See above terminal output for more information"
        exit 1
    fi
    curl --silent http://localhost:5009/v1/openapi.json > generated/openapi.json
    CURL_EXIT_CODE=$(echo $?)
done

# Stop het server background process, zonder de output naar de
# terminal te printen
kill $SERVER_PID
wait $SERVER_PID 2>/dev/null

../run-spectral-linter.sh $(realpath generated/openapi.json)
