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
npm install -g browserify node-sass grunt-cli jscs yo
npm install
grunt
```

When the prompt appears select "Start your development environment"

You should now be able to view the demo Proto Watch app in your browser at http://localhost:9001.
