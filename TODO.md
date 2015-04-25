# Important

- Full test coverage tests
- see what happens when multiple specs declare app as a global

- Fix screen size (slightly smaller than 240-by-240-pixels)

- Notifications
- Mongo DB

- reorganise/simplify the folder structure (again look at benm repo)
- fix watch/copy task so that index.html is reloaded when in dev mode

- example test for loading data

- example of sending a notifications (extra buttons on index page?)
- example of receiving a notification


# Nice to have / ideas
- click and hold for buttons i.e. scrolling
- see if fix option is working properly with git jscs
- keyboard shortcuts for watch inputs
- Separate stylesheets for layout/scafloding and actual app
- add automated check for test coverage (set at 80% and fail the build?)

# Notes
- may need to separate init and start methods. app.start can't be called multiple times due to Backbone.history.start();


# Useful links
- Similar boilerplate app https://github.com/jkat98/benm
- hook up mongo db backend for dev and heroku (http://kroltech.com/2013/12/boilerplate-web-app-using-backbone-js-expressjs-node-js-mongodb)
