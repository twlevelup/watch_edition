module.exports = {
    public: {
      files: [
          {
            expand: true,
            cwd: 'src/',
            src: 'css/**',
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: 'img/**',
            dest: 'public/'
          }
      ]
    }
};
