# LevelUp Watch Edition App Development Environment

+[![Build Status](https://snap-ci.com/twlevelup/watch_edition/branch/master/build_image)](https://snap-ci.com/twlevelup/watch_edition/branch/master)



This git repo contains all the code you need to prototype apps for the Proto Watch.

There are a few things you need to do before you can use the sample project.

## Prerequisites

Before you can setup your Proto Watch development environment you need to have Git, NodeJS and CCTray/CCMenu installed and working.

It's up to you how you install these and as long – as they work correctly it doesn't matter – but if you're not sure you can follow these instructions.

### Windows Setup Instructions
- Install [Git ](http://git-scm.com/)
- Install [Node](https://nodejs.org/download/)
- Install [CCTray](http://www.cruisecontrolnet.org/projects/cctray)
- Install [Livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
- Install [Mongo DB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)

### OS X Setup Instructions

This article will help you get Node and NPM installed using Homebrew (our preferred way of installing dev tools on OS X)

- [Installing Node.js and npm using Homebrew on OS X](https://thechangelog.com/install-node-js-with-homebrew-on-os-x/)
- Install [CCMenu](http://ccmenu.org/)
- Install [Livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
- Install [Mongo DB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) - using Homebrew you can write "brew install mongodb" in your terminal

## Setting Up The Sample Project

Now that you have Git and NodeJS installed you are ready to download this Git repo and setup your local development environment.

```shell
npm install -g browserify node-sass grunt-cli jscs
npm install
grunt
```

When the prompt appears select "Start your development environment"

You should now be able to view the demo Proto Watch app in your browser at http://localhost:9001.

## Continuous Integration

### Checking the build status

To view the build status and get notifications about the build status:

1. Visit [Snap CI](https://snap-ci.com/twlevelup/watch_edition/branch/master?notice=watch_edition) and click "CCTray" in the top right of the screen
2. Add the XML config to CCTray or CCMenu on your dev machine

You can also access the CI server and view the status of the build here [Snap CI](https://snap-ci.com/twlevelup/watch_edition/branch/master?notice=watch_edition)

### Before you commit

1. Check the CI build, do not commit unless it's passing!
2. ```git pull --rebase```
3. ```grunt pre-commit```
4. Fix any errors
5. ```git push```


## About The Tech Stack

There are a number of pieces in the tech stack but many of them are just to provide automation and don't have to touched or understood in order to build Proto Watch apps.

During the project you'll mostly be working with JavaScript, Backbone and Jasmine.

### App Components

- [Backbone](http://backbonejs.org/) - Javascript app framework
- [Underscore](http://underscorejs.org/) - JavaScript utility methods
- [jQuery](https://jquery.com/) - HTML/DOM Manipulation
- [Handlebars](http://handlebarsjs.com/) - HTML Templating
- [SCSS](http://sass-lang.com/) - CSS Styling

### Testing
- [Karma](http://karma-runner.github.io/0.12/index.html) - Test runner
- [Jasmine](http://jasmine.github.io/) - Javascript testing
- [Jasmine jQuery Matchers](https://github.com/unindented/jasmine-jquery-matchers/) - jQuery based matchers for testing

### Infrastructure Tools

- [Grunt](http://gruntjs.com/) - Automation
- [Snap](https://snap-ci.com/) - Continuous Integration
- [Heroku](https://www.heroku.com/) - Staging environment

## Watch Specs

- **Audio**: speaker
- **Input**: 5 mechanical buttons
- **Screen**: 240-by-240-pixel resolution. 1.54” (diagonal) colour TFT display
- **Capacity**: 256MB Enough for a large amount of text, no video or images (beyond UI elements i.e. no photo, video or music library)
- **GPS**: Yes
- **Expansion**: None
- **Networking**: GPRS or less
- **Battery and Power**: Built in rechargeable batter

### Notes
With regards to networking the actual speed depends on your target audience i.e. do some research but will be capped at GPRS speeds. Basically make ajax network requests for JSON data

## FAQ

**How do I run a subset of test?**

replace it and describe with fit or fdescribe

## Further Reading

### [Backbone Fundamentals](http://addyosmani.github.io/backbone-fundamentals/)
You don't need to read the whole book but it's worth going over the first couple of chapters to understand how this is different from a regular MVC framework.

### [tryGit](https://try.github.io)

An excellent online tutorial for getting started with Git.
