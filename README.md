# Setup Instructions

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


## Setting up the sample project

Now that you have Git and NodeJS installed you can download this repo and get the project up and running.

### 1. Install the dependencies

```shell
npm install -g browserify
npm install -g node-sass
npm install -g grunt-cli
npm install
```

### 2. Check everything's working

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

## CI

You can access the CI server here [Snap CI](https://snap-ci.com/twlevelup/proto_watch/branch/master?notice=proto_watch)

# The Tech Stack

## The App

[Jasmine](http://jasmine.github.io/) - Testing
[Backbone](http://backbonejs.org/) - App framework / structure
[Underscore](http://underscorejs.org/) - JS Utility methods
[jQuery](https://jquery.com/) - HTML/DOM Manipulation
[Handlebars](http://handlebarsjs.com/) - Templating
[SCSS](http://sass-lang.com/) - Styling

## Infrastructure

[Grunt](http://gruntjs.com/) - Automation
[Snap](https://snap-ci.com/) - CI Builds
[Heroku](https://www.heroku.com/) - Staging environment

# Recommended Reading

[Backbone Fundamentals](http://addyosmani.github.io/backbone-fundamentals/) You don't need to read the whole book but it's worth going over the first couple of chapters to understand how this is different from a regular MVC framework.

[Official Backbone docs](http://backbonejs.org/)

[Official Underscore docs](http://underscorejs.org/)
