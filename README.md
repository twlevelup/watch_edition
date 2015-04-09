# Introduction

## Prerequisites

### Git

Make sure you have Git installed.

- Windows users [get the installer here](http://git-scm.com/)
- For OS X users we recommend installing NodeJS using [Homebrew](http://brew.sh/)


### NodeJS

Make sure you have NodeJS Installed.

- Windows users [get the installer here](https://nodejs.org/download/)
- For OS X users we recommend installing NodeJS using [Homebrew](http://brew.sh/)

### CCTray / CCMenu

This will allow you to monitor the status of the CI build.

1. Install [CCTray](http://www.cruisecontrolnet.org/projects/cctray) (Windows) or [CCMenu](http://ccmenu.org/) (OS X)
2. Visit https://snap-ci.com/twlevelup/proto_watch/branch/master?notice=proto_watch and click "CCTray" in the top right of the screen
3. Add the XML config to CCTray or CCMenu on your dev machine


# Setup

Now that you have Git and NodeJS installed you can download this repo and get the project up and running.

## 1. Install the dependencies

```shell
npm install -g browserify
npm install -g node-sass
npm install -g grunt-cli
npm install
```

## 2. Check everything's working

```shell
grunt test
```

All the tests should pass.

## 3. Launch the demo app

1. Start the server

```shell
grunt
```

Select "Start your development environment"

2. [click here](http://localhost:9001)

# CI

You can access the CI server here [Snap CI](https://snap-ci.com/twlevelup/proto_watch/branch/master?notice=proto_watch)

# Recommended Reading

- [Backbone Fundamentals](http://addyosmani.github.io/backbone-fundamentals/)
