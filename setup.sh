set -e # exit on error

unamestr=`uname`
echo Installing node and npm
if [[ "$unamestr" == 'Linux' ]]; then
  sudo apt-get update
  which nodejs || sudo apt-get install python-software-properties
  which nodejs || sudo add-apt-repository ppa:chris-lea/node.js
  which nodejs || sudo apt-get update
  which nodejs || sudo apt-get install nodejs npm
  sudo apt-get install python-dev
elif [[ "$unamestr" == 'Darwin' ]]; then
  which node || brew install node
  which npm || curl https://npmjs.org/install.sh | sh
  which optipng || brew install optipng
  which phantomjs || brew install phantomjs
fi

echo installing testacular
which testacular || sudo npm install -g testacular

echo Installing yeoman
which compass || sudo gem install compass
which yeoman || sudo npm install -g yeoman

echo DONE
set +e
