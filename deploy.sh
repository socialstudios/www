#!/bin/bash

function usage() {
  echo "Usage: $0"
  exit 1
}

if [ $# -ne 0 ]
then
  usage
fi

echo Deploying Website now

yeoman build
echo "<!-- Built on `date`,     git rev: `git rev-parse HEAD` -->" >> dist/index.html

[ -e public ] && rm -rf public
mv dist public
cap deploy
cap deploy_html_short_cache
