const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html',
    })
  ],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: {
      '/workout': 'http://localhost:3000',
      '/filterworkout': 'http://localhost:3000'
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ]
  },
};
