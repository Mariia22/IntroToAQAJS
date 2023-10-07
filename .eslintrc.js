module.exports = {
  'env': {
    'mocha': true
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'script',
  },
  "ignorePatterns": ["wdio.conf.js"],
  'rules': {
    "require-jsdoc" : 0,
  },
};
