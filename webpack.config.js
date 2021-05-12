const path = require('path');
const IN_DIR = path.join(__dirname, '/source');
const OUT_DIR = path.join(__dirname, '/dist');
const OUT_DIR_PROD = path.join(__dirname, '../ll-server/dist');
const outputPaths = [OUT_DIR_PROD];

module.exports = outputPaths.map(outputPath => {
  return (env) => {
    return configure(env, outputPath);
  }
});

function configure(env, outputPath) {

  // pulled this out to make readable - used below in config
  const modules = {
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
  };

  const config = {
    stats: {warnings:false},
    entry: `${IN_DIR}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, outputPath)
    },
    module: modules
  };

  return config;
}