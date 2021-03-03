const config = {
  allowUncaught: false,
  bail: false,
  delay: false,
  ui: 'bdd',
  timeout: 5000,
  recursive: true,
  exit: true,
  useStrict: true,
  extensions: ['.ts'],
  reporter: 'min',
  spec: 'dist/__tests__/**/*.test.js',
};
module.exports = config;
