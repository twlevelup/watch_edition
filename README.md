# Proto Watch App Development Environment

There are a few things you need to do before you can use the sample project.

## Prerequisites

Before you can setup your Proto Watch development environment you need to have Git, NodeJS and CCTray/CCMenu installed and working.

It's up to you how you install these and as long as they work correctly it doesn't matter but if you're not sure you can follow these instructions.

### Windows Setup Instructions
- Install [Git ](http://git-scm.com/)
- Install [Node](https://nodejs.org/download/)
- Install [CCTray](http://www.cruisecontrolnet.org/projects/cctray)


### OS X Setup Instructions

- Install [Homebrew](http://brew.sh/)
- Install [CCMenu](http://ccmenu.org/)
- `brew install node`

## Setting Up The Sample Project

Now that you have Git and NodeJS installed you are ready to download this Git repo and setup your local development environment.

```shell
npm install -g browserify node-sass grunt-cli
npm install
grunt test
grunt
```

When the prompt appears select "Start your development environment"

2. [View the demo app](http://localhost:9001)

## Continuous Integration

You can access the CI server here [Snap CI](https://snap-ci.com/twlevelup/proto_watch/branch/master?notice=proto_watch)

2. Visit https://snap-ci.com/twlevelup/proto_watch/branch/master?notice=proto_watch and click "CCTray" in the top right of the screen
3. Add the XML config to CCTray or CCMenu on your dev machine


## About The Tech Stack

There are a number of pieces in the tech stack but many of them are just to provide automation and don't have to touched or understood in order to build Proto Watch apps.

During the project you'll mostly be working with JavaScript, Backbone and Jasmine.

### App

- [Jasmine](http://jasmine.github.io/) - Javascript testing
- [Backbone](http://backbonejs.org/) - Javascript app framework
- [Underscore](http://underscorejs.org/) - JavaScript utility methods
- [jQuery](https://jquery.com/) - HTML/DOM Manipulation
- [Handlebars](http://handlebarsjs.com/) - HTML Templating
- [SCSS](http://sass-lang.com/) - CSS Styling

### Infrastructure Tools

- [Grunt](http://gruntjs.com/) - Automation
- [Snap](https://snap-ci.com/) - CI Builds
- [Heroku](https://www.heroku.com/) - Staging environment

## Recommended Reading

### [Backbone Fundamentals](http://addyosmani.github.io/backbone-fundamentals/)
You don't need to read the whole book but it's worth going over the first couple of chapters to understand how this is different from a regular MVC framework.
