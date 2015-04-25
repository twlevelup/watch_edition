module.exports = {
  public: {
    files: [
        {
          expand: true,
          cwd: 'client/src/styles/',
          src: ['vendor/**', 'fonts/**'],
          dest: 'public/styles/'
        },
        {
          expand: true,
          cwd: 'client/src/',
          src: 'img/**',
          dest: 'public/'
        },
        {
          expand: true,
          cwd: 'client/src/',
          src: ['*.html', '*.txt'],
          dest: 'public/'
        }
    ]
  }
};
