module.exports = {
  public: {
    files: [
        {
          expand: true,
          cwd: 'src/styles/',
          src: 'vendor/**',
          dest: 'public/styles/'
        },
        {
          expand: true,
          cwd: 'src/',
          src: 'img/**',
          dest: 'public/'
        },
        {
          expand: true,
          cwd: 'src/',
          src: ['*.html', '*.txt'],
          dest: 'public/'
        }
    ]
  }
};
