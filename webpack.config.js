const path = require('path');
const SRC_DIR = path.join(__dirname, '/source');
const DIST_DIR = path.join(__dirname, '/dist');
const webpack = require('webpack');

const exportFunc = ( env ) => {

  return {

    // entry point
    entry: `${SRC_DIR}/index.jsx`,

    // output file
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },

    // loaders and plugins
    module: {

      // note that after matching the regular expression css-loader will run before style-loader
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          query: {
            plugins: ["transform-object-rest-spread", "transform-class-properties"],
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  };
};

module.exports = exportFunc;