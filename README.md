# LevelUp Watch Edition App Development Environment

[![Build Status](https://snap-ci.com/twlevelup/watch_edition/branch/master/build_image)](https://snap-ci.com/twlevelup/watch_edition/branch/master)

This git repo contains all the code you need to prototype apps for the Proto Watch.

# Installation

See the [Installation Instructions](INSTALL.md)

## Continuous Integration

### Before you commit

1. Check the CI build, do not commit unless it's passing!
2. ```git pull --rebase```
3. ```grunt pre-commit```
4. Fix any errors
5. ```git push```


### Checking the build status

To view the build status and get notifications about the build status:

1. Visit [Snap CI](https://snap-ci.com/twlevelup/watch_edition/branch/master?notice=watch_edition) and click "CCTray" in the top right of the screen
2. Add the XML config to CCTray or CCMenu on your dev machine

You can also access the CI server and view the status of the build here [Snap CI](https://snap-ci.com/twlevelup/watch_edition/branch/master?notice=watch_edition)


## Tech Stack

There are a number of pieces in the tech stack but many of them are just to provide automation and don't have to touched or understood in order to build Proto Watch apps.

During the project you'll mostly be working with JavaScript, Backbone and Jasmine.

You should only need to work on files inside the ```client/``` directory if you are building a watch app.

- [Backbone](http://backbonejs.org/) - Javascript app framework
- [Underscore](http://underscorejs.org/) - JavaScript utility methods
- [jQuery](https://jquery.com/) - HTML/DOM Manipulation
- [Handlebars](http://handlebarsjs.com/) - HTML Templating
- [SCSS](http://sass-lang.com/) - CSS Styling

### Testing

Tests are written using Jasmine and run using Karma. jQuery matchers are available to make view testing easier.

- [Karma](http://karma-runner.github.io/0.12/index.html) - Test runner
- [Jasmine](http://jasmine.github.io/) - Javascript testing
- [Jasmine jQuery Matchers](https://github.com/unindented/jasmine-jquery-matchers/) - jQuery based matchers for testing

### Infrastructure Tools

These are used to automate various tasks in your development environment and deploy automatically to the Heroku staging environment.

- [Grunt](http://gruntjs.com/) - Automation
- [Snap](https://snap-ci.com/) - Continuous Integration
- [Heroku](https://www.heroku.com/) - Staging environment

## Watch Specifications

The Proto Watch is designed to be a simple low cost device.

- **Audio**: speaker
- **Input**: 5 mechanical buttons
- **Screen**: 240-by-240-pixel resolution. 1.54” (diagonal) colour TFT display
- **Capacity**: 256MB Enough for a large amount of text, no video or images (beyond UI elements i.e. no photo, video or music library)
- **GPS**: Yes
- **Expansion**: None
- **Networking**: GPRS or less*
- **Battery and Power**: Built in rechargeable battery

* With regards to networking the actual speed depends on your target audience i.e. do some research but will be capped at GPRS speeds. Basically make ajax network requests for JSON data

## FAQ

**How do I run a subset of tests?**

Replace it and describe with fit or fdescribe

**I've got more questions**

Look at the further reading section below ;-)

**Error: `libsass` bindings not found. Try reinstalling `node-sass`?**

You've probably switched node version. Try running `rebuild node-sass`

## Further Reading

### [Backbone Fundamentals](http://addyosmani.github.io/backbone-fundamentals/)
You don't need to read the whole book but it's worth going over the first couple of chapters to understand how this is different from a regular MVC framework.

### [tryGit](https://try.github.io)

An excellent online tutorial for getting started with Git.

### Jasmine jQuery Matchers

[Jasmine jQuery Matchers](https://github.com/velesin/jasmine-jquery)
