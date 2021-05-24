module.exports = {
  // Target must be experimental-serverless-trace
  // Your build time will be longer with this option
  target: 'serverless',
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
}
