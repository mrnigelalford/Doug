const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert/"),
      "stream": false,
      "process": false
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
