# Important

- More test coverage for framework and sample pages
- See what happens when multiple specs declare app as a global

- Auto-run tests in dev mode

- Audio playback
The framework should provide a simple method e.g. app.play('path/to/file') for playing audio.
Students shouldn't need to test how the method works, just spy on it and check it was given the correct file by the correct method.
http://www.storiesinflight.com/html5/audio.html or http://www.schillmania.com/projects/soundmanager2/

- Support for notifications
- move ALL framework code to a single folder to discourage students from modifying it

- rendering test for collections contacts page - where is the html

- code covereage check... (browserify)

- example test for loading data
- example of sending a notifications (extra buttons on index page?)
- example of playing an audio clip
- example of receiving a notification


# Nice to have / ideas
- Add basic security check https://www.npmjs.com/package/grunt-retire
- change watch styling, simpler more like http://codepen.io/jrg/pen/Cjrzx
- click and hold for buttons i.e. scrolling
- click, double click, click and hold events
- keyboard shortcuts for watch buttons
- Separate stylesheets for layout/scafloding and actual app
- add automated check for test coverage (set at 80% and fail the build?)
 c
# Notes
- App may need to separate init and start methods. app.start can't be called multiple times due to Backbone.history.start();


# Useful links
- Similar boilerplate app https://github.com/jkat98/benm
- hook up mongo db backend for dev and heroku (http://kroltech.com/2013/12/boilerplate-web-app-using-backbone-js-expressjs-node-js-mongodb)
