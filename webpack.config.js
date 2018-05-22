
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const PATHS = {
  source: path.join(__dirname, ''),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: `${PATHS.source}/js/index.js`,
  output: {
    path: PATHS.build,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'myYoutube',
    }),
    new ExtractTextPlugin('../build/styles.css'),
  ],
};
