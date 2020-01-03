const path = require('path');
const IN_DIR = path.join(__dirname, '/source');
const OUT_DIR = path.join(__dirname, '/dist');

const exportFunc = ( env ) => {
  return {
    entry: `${IN_DIR}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: OUT_DIR
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.jsx?/,
          include: IN_DIR,
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