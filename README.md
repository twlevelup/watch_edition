# LevelUp Watch Edition App Development Environment

[![Build Status](https://snap-ci.com/twlevelup/watch_edition/branch/master/build_image)](https://snap-ci.com/twlevelup/watch_edition/branch/master)

This git repo contains all the code you need to prototype apps for the Proto Watch.

The [wiki](https://github.com/twlevelup/watch_edition/wiki) contains lots of useful documentation

# Installation

See the [Installation Instructions](https://github.com/twlevelup/watch_edition/wiki/Installation)

## Continuous Integration

### Before you commit

1. Check the CI build, do not commit unless it's passing!
2. ```git pull --rebase```
3. Fix any merge conflicts
4. ```./go pre-commit``` (OS X) or ```npm -s run test``` (Windows)
4. Fix any errors
5. ```git push```

### Docker OSX Before you commit

1. Check the CI build, do not commit unless it's passing!
2. ```git pull --rebase```
3. Fix any merge conflicts
4. ```docker run --rm -ti -v "$PWD":/usr/src/levelup/app watchedition_api ./go pre-commit```
5. Fix any errors
6. ```git push```

### Docker Windows Before you commit

1. Check the CI build, do not commit unless it's passing!
2. ```git pull --rebase```
3. Fix any merge conflicts
4. ```docker run --rm -ti -v "%cd%":/usr/src/levelup/app watchedition_api npm -s run test```
5. Fix any errors
6. ```git push```

### Checking the build status

To view the build status and get notifications about the build status:

1. Visit [Snap CI](https://snap-ci.com/twlevelup/watch_edition/branch/master?notice=watch_edition) and click "CCTray" in the top right of the screen
2. Add the XML config to CCTray or CCMenu on your dev machine

You can also access the CI server and view the status of the build here [Snap CI](https://snap-ci.com/twlevelup/watch_edition/branch/master?notice=watch_edition)
