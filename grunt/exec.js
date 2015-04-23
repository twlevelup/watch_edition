module.exports = {
  jscs: {
    cmd: 'jscs --fix Gruntfile.js grunt/*.js src/js/**/*.js spec/*.spec.js'
  },
  commit: {
    cmd: 'git pull --rebase && git push'
  }
};
