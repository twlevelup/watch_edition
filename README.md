# LevelUp Watch Edition App Development Environment

[![Build Status](https://circleci.com/gh/twlevelup/watch_edition.png)](https://circleci.com/gh/twlevelup/watch_edition)

This git repo contains all the code you need to prototype apps for the Proto Watch.

The [wiki](https://github.com/twlevelup/watch_edition/wiki) contains lots of useful documentation

# Installation

See the [Installation Instructions](https://github.com/twlevelup/watch_edition/wiki/Installation)

## Continuous Integration

This project is continuously deployed to heroku by [Circle CI](https://circleci.com).
You can view this app at [https://twlevelup-watch-edition.herokuapp.com/](https://twlevelup-watch-edition.herokuapp.com/)

### Before you commit

1. Check the CI build, do not commit unless it's passing!
2. Run ```git pull --rebase```
3. Fix any merge conflicts
4. Run
```./go pre-commit``` (OS X)
```npm -s run test``` (Windows)
```docker-compose -f docker-compose.test.yml up``` (Docker)
4. Fix any errors
5. Run ```git push```

### Checking the build status

To view the build status and get notifications about the build status:

Add the following XML config to CCTray or CCMenu on your dev machine

	https://circleci.com/gh/twlevelup/watch_edition.cc.xml

You can also access the CI server and view the status of the build here [Circle CI](https://circleci.com/gh/twlevelup/watch_edition)
