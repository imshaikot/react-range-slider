const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('ReactRangeSlider.min.css');

module.exports = {
  entry: './src/components/ReactRangeSlider/index.jsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        loader: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
    ],
  },
  plugins: [
    extractLESS,
  ],
};
