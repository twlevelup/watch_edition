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

### Infrastructure Tools

These are used to automate various tasks in your development environment and deploy automatically to the Heroku staging environment.

- [Grunt](http://gruntjs.com/) - Automation
- [Snap](https://snap-ci.com/) - Continuous Integration
- [Heroku](https://www.heroku.com/) - Staging environment

## Further Reading

### [Backbone Fundamentals](http://addyosmani.github.io/backbone-fundamentals/)
You don't need to read the whole book but it's worth going over the first couple of chapters to understand how this is different from a regular MVC framework.

### [tryGit](https://try.github.io)
