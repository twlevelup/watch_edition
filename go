#!/bin/bash

command_exists () {
  type "$1" &> /dev/null ;
}

show_instructions () {
  echo "Usage: ./go <command>"
  echo ""
  echo "where <command> is one of:"
  echo "    install       installs any required dependencies"
  echo "    test          runs all your unit tests"
  echo "    test:dev      runs all your unit tests in development mode"
  echo "    pre-commit    prepares your changes to be committed"
  echo "    start         runs your local development server at http://localhost:8080"
}

initial_setup () {
  echo "It looks like this is your first time trying to run the app."
  echo "Before you start, I need to set a few things up for you."
  npm -s install
  echo "All done! You can now start using the app!"
}

if ! command_exists node || ! command_exists npm; then
  echo "You need node and npm to run this!"
  echo "You'll need to install these yourself as I can't install them for you :("
  echo "Try using NVM https://github.com/creationix/nvm"
  exit 1
fi

[[ -d node_modules ]] || initial_setup

if [[ $1 ]]; then
  if [[ $1 == "--help" || $1 == "-h" ]]; then
    show_instructions
  fi

  if [[ $1 == "install" ]]; then
    npm -s install
  fi

  if [[ $1 == "test" ]]; then
    npm -s test
    exit $?
  fi

  if [[ $1 == "test:dev" ]]; then
    npm -s run test:dev
    exit $?
  fi

  if [[ $1 == "pre-commit" ]]; then
    npm -s run-script ci
    exit $?
  fi

  if [[ $1 == "start" ]]; then
    npm -s start
  fi
else
  show_instructions
fi
