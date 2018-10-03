module.exports = {
  "verbose": true,
  "testURL": "http://localhost/",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
    "\\.hbs$": "jest-handlebars"
  },
  "moduleFileExtensions": [
    "js"
  ],
  "testRegex": "/client/*/.*\\.spec\\.js$",
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "client/src/js/**/*.js",
    "!client/src/js/storage.js"
  ]
}