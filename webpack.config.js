
const path = require('path');

module.exports = {
  mode: 'development',
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js',
  },
};

module.exports = {
    resolve: {
        fallback: {
            url: require.resolve("url/"),
            path: false,
            zlib: require.resolve("browserify-zlib")
        }
    }
}
