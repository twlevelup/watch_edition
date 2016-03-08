## Prerequisites

Before you can setup your Proto Watch development environment you need to have Git, NodeJS and CCTray or CCMenu installed and working.

It's up to you how you install these and as long – as they work correctly it doesn't matter – but if you're not sure you can follow these instructions.

### Windows Setup Instructions
1. Install [Git](http://git-scm.com/)
2. Install [Node](https://nodejs.org/download/)
3. Install [CCTray](http://en.freedownloadmanager.org/Windows-PC/CruiseControl-NET-CCTray-FREE.html)
4. Install [Livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)

### OS X Setup Instructions

This article will help you get Node and NPM installed using Homebrew (our preferred way of installing dev tools on OS X)

1. [Installing Node.js and npm using Homebrew on OS X](https://thechangelog.com/install-node-js-with-homebrew-on-os-x/)
2. Install [CCMenu](http://ccmenu.org/)
3. Install [Livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)

## Setting Up The Sample Project

Now that you have Git and NodeJS installed you are ready to download this Git repo and setup your local development environment.

**Now git clone your teams repo!**

```shell
cd path_to_team_repo
npm install -g grunt-cli jscs yo
npm install
grunt
```

**When the prompt appears select "Start your development environment"**

You should now be able to view the demo Proto Watch app in your browser at http://localhost:9001.

##FAQ##

**I already have node install, but it's a different version**

Use N to easily install and switch between different vesions of Node https://github.com/tj/n
