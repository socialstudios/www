#!/bin/bash

set -e # exit on error

function ubuntu_install_node() {
  sudo apt-get update
  sudo apt-get install python-software-properties -y
  sudo add-apt-repository ppa:chris-lea/node.js -y
  sudo apt-get install nodejs npm -y
}

unamestr=`uname`
echo Installing node and npm
if [[ "$unamestr" == 'Linux' ]]; then
  sudo apt-get update
  node --version || ubuntu_install_node
  sudo apt-get install python-dev
elif [[ "$unamestr" == 'Darwin' ]]; then
  which node || brew install node
  which npm || curl https://npmjs.org/install.sh | sh
  which optipng || brew install optipng
  which phantomjs || brew install phantomjs
fi

echo Installing yeoman
which compass || sudo gem install compass
which yeoman || sudo npm install -g yeoman


echo s3-static-site installed?
gem list s3-static-site -i || gem install s3-static-site || sudo gem install s3-static-site
echo capistrano?
gem list capistrano -i || gem install capistrano || sudo gem install capistrano
echo mime-types?
gem list mime-types -i || gem install mime-types || sudo gem install mime-types

echo Did you remember to set: AWS_ACCESS_KEY and AWS_SECRET_KEY ?

