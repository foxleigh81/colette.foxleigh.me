module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  rules: {
    'semi': [1, 'never'],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.dev.js',
      },
    },
  },
}