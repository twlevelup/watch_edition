module.exports = function (grunt, options) {
  return {
    options: {
            sourceMap: true
    },
    app: {
        files: {
            'public/css/app.css': 'src/scss/app.scss'
        }
    }
  };
};
