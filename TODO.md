# Important

- Full test coverage
- See what happens when multiple specs declare app as a global

- auto-run tests in dev mode

- Support for notifications - adam

- Mongo DB backend (with express?) - james (node expressapp?) benm repo app directory...
- grunt task to start mongo in parallel (concurrent)
- rendering test for collections contacts page - where is the html

- code covereage... (browserify)

- example test for loading data
- example of sending a notifications (extra buttons on index page?)
- example of receiving a notification


# Nice to have / ideas
- change watch styling, simpler more like http://codepen.io/jrg/pen/Cjrzx
- click and hold for buttons i.e. scrolling
- click, double click, click and hold events
- keyboard shortcuts for watch buttons
- Separate stylesheets for layout/scafloding and actual app
- add automated check for test coverage (set at 80% and fail the build?)

# Notes
- App may need to separate init and start methods. app.start can't be called multiple times due to Backbone.history.start();


# Useful links
- Similar boilerplate app https://github.com/jkat98/benm
- hook up mongo db backend for dev and heroku (http://kroltech.com/2013/12/boilerplate-web-app-using-backbone-js-expressjs-node-js-mongodb)
