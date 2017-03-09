# Important

- Rendering test for collections contacts page - where is the html?
- Auto-run tests in dev mode
- move ALL framework code to a single folder to discourage students from modifying it
- use build targets e.g. dev and prod, cleanup dependencies

# Nice to have / ideas
- Move sample pages to special URL so they can be retained but don't interfere with students apps
- Add basic security check https://www.npmjs.com/package/grunt-retire
- click and hold for buttons i.e. scrolling
- click, double click, click and hold events
- Separate stylesheets for layout/scaffolding and actual app

# Notes
- App may need to separate init and start methods. app.start can't be called multiple times due to Backbone.history.start();

# Useful links
- Similar boilerplate app https://github.com/jkat98/benm

# Enhancement

- [ ] Webpack2
- [ ] Yarn - for deterministic build
- [ ] Better ES6 style support
- [ ] Better webpack config management
- [ ] jsdom to replace karma
- [ ] mocha + sinon + chai to replace jasmine
- [ ] postcss + autoprefixer to replace scss
- [ ] stylelint (css)
- [ ] Component based structure
- [ ] \(Need wider discussion\) (React or Backbone) + Redux? Should we even use redux? What do we want to achieve?
