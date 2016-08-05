var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test:   /\.pcss$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }],
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.pcss', '.md']
  }
};
