module.exports = {
    src: [
        'Gruntfile.js',
        'src/js/**/*.js',
        'spec/**/*.js',
        '!spec/spec-bundle.js'
    ],
    options: {
      config: '.jscsrc'
    }
}
