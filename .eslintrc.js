module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  plugins: ['react'],
  rules: {
    // React 19 drops defaultProps on function components; use default params.
    // expo-* packages resolve through package.json "exports".
    'import/no-unresolved': ['error', { ignore: ['^expo-'] }],
    'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
