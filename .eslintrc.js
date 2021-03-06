// eslint 配置较老，待整理
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jquery': true
  },
  'plugins': ['react'],
  'globals': {
    '__CLIENT__': true,
    '__DEVCLIENT__': true,
    '__DEVSERVER__': true,
    '__DEVTOOLS__': true,
    '__DEVLOGGER__': true
  },
  //"extends": ["eslint:recommended","plugin:react/recommended"],
  // 'extends': ['plugin:react/recommended'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 7,
    'ecmaFeatures': {
      'globalReturn': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true,
      'jsx': true,
      'tsx': true
    }
  },
  'parser': 'babel-eslint',
  'rules': {
    // 'strict': 0,
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    // 'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    // 'no-console': 0,
    //"no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    // 'no-mixed-spaces-and-tabs': [0],
    // 'react/no-danger': 0,
    // 'react/display-name': 0,
    // 'react/no-deprecated': 0,
    // 'react/prop-types': [0],
  }   
}