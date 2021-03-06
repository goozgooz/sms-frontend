'use strict';

require('dotenv').config();

const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new HTMLPlugin({
    template: `${__dirname}/src/index.html`,
  }),
  new ExtractPlugin('bundle.[hash].css'),
  new DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
    __GOOGLE_KEY__: JSON.stringify(process.env.GOOGLE_TOKEN), 
    __DROPBOX_KEY__: JSON.stringify(process.env.DROPBOX_TOKEN), 
  }),
  new EnvironmentPlugin({
    NODE_ENV: process.env.NODE_ENV,
  }),
];

if(production){
  plugins = plugins.concat([
    new UglifyJsPlugin(),
    new CleanPlugin(),
  ]);
};

module.exports = {
  plugins,
  
  devtool: production ? undefined : 'source-map',
  
  entry: `${__dirname}/src/main.js`,

  devServer: {
    historyApiFallback: true, // server index.html for 404 routes
  },
    
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
    publicPath: process.env.CDN_URL,
  },
    
  module: {
    rules: [
      {
        test: /\.css$/,  
        include: /node_modules/,  
        loaders: ['style-loader', 'css-loader'],
      },
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
            {
              loader: 'css-loader',
              options: {
                sourceMap:true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [`${__dirname}/src/style`],
              },
            },
          ],
        }),
      },

    ],
  },
};