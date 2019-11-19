const path = require('path');
const SRC_DIR = path.join(__dirname, '/source');
const DIST_DIR = path.join(__dirname, '/dist');
const webpack = require('webpack');

const exportFunc = ( env ) => {
  return {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
            }
          }
        }
      ]
    }
  };
};

module.exports = exportFunc;