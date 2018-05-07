'use strict';

require('dotenv').config();

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  node: {
    fs: 'empty',
  },
  
  devtool: 'source-map',
  
  entry: `${__dirname}/src/main.js`,

  devServer: {
    historyApiFallback: true, // server index.html for 404 routes
  },
    
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  },
    
  plugins: [
    new HTMLPlugin(),
    new ExtractPlugin('bundle.[hash].css'),
  ],
    
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot).*/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        exclude: /\.icon\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'image/[name].[hash].[ext]',
          },
        }],
      },
      {
        test: /\.icon\.svg$/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          use: [
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: production ? false : true,
                includePaths: [`${__dirname}/src/style`],
              },
            },
          ],
        }),
      },

    ],
  },
};