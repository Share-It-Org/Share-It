module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': 'never',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'no-console': 'off',
    radix: 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
  },
};
