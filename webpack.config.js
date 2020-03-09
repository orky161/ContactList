const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Is the current build a development build

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');
/**
 * Webpack Configuration
 */
module.exports = {
  entry: path.resolve(dirApp, 'main.tsx'),
  resolve: {
    modules: [dirApp, dirNode],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(dirApp, 'index.ejs')
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(dirApp, 'assets', 'svg'), to: 'svg' }
    ])

  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [dirApp],
        options: {
          presets: ['react']
        }
      },
      {
        test: /\.css$/,
        include: [dirApp, /node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  }
};
