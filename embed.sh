#!/bin/bash
# shellcheck disable=SC2164
cd "$(dirname "$0")"

if [ -s $1 ]; then
  echo "have no env param: staging, prod"
  exit 1
else
  case "$1" in
  "staging")
    SET_ENV_STAGING=true npm run eb-build
    rm dist/manifest.json dist/*.LICENSE.txt
    ;;
  "prod")
    npm run eb-build
    rm dist/manifest.json dist/*.LICENSE.txt
    ;;
  *)
    echo "default env"
    exit 1
    ;;
  esac
fi
