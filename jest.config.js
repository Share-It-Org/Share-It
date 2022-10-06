module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/FrontEnd/__Test__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/FrontEnd/__Test__/fileMock.js"
  },
  preset: "jest-puppeteer"
};
