module.exports = {
  vendor: {
    files: [
        {
          expand: true,
          cwd: 'client/src/',
          src: ['vendor/**'],
          dest: 'public/'
        }
    ]
  },
  fonts: {
    files: [
        {
          expand: true,
          cwd: 'client/src/',
          src: ['fonts/**'],
          dest: 'public/'
        }
    ]
  },
  images: {
    files: [
        {
          expand: true,
          cwd: 'client/src/',
          src: 'images/**',
          dest: 'public/'
        }
    ]
  },
  static: {
    files: [
        {
          expand: true,
          cwd: 'client/src/',
          src: ['*.html'],
          dest: 'public/'
        }
    ]
  }
};
