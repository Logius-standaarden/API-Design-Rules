#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

cd "$CURRENT_DIRECTORY"

# Start server in background
uvicorn main:app --host 127.0.0.1 --port 8000 > /dev/null 2>&1 &
SERVER_PID=$!

mkdir -p generated/
rm -f generated/openapi.json

# Poll for openapi.json
CURL_EXIT_CODE=1
ATTEMPTS=0
MAX_ATTEMPTS=50

while [ $CURL_EXIT_CODE -ne 0 ] && [ $ATTEMPTS -lt $MAX_ATTEMPTS ]
do
    sleep 0.1
    ps -p $SERVER_PID > /dev/null
    PROCESS_EXISTS=$?
    if [ $PROCESS_EXISTS -ne 0 ]; then
        echo "Server crashed."
        exit 1
    fi

    curl --silent http://localhost:8000/v1/openapi.json > generated/openapi.json
    CURL_EXIT_CODE=$?
    ATTEMPTS=$((ATTEMPTS + 1))
done

if [ $CURL_EXIT_CODE -ne 0 ]; then
  echo "Timed out waiting for server."
  kill $SERVER_PID
  exit 1
fi

# Stop server quietly
kill $SERVER_PID
wait $SERVER_PID 2>/dev/null

# Run linter
../run-spectral-linter.sh "$(realpath generated/openapi.json)"
