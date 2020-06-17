const path = require('path');
const IN_DIR = path.join(__dirname, '/source');
const OUT_DIR = path.join(__dirname, '/dist');
const OUT_DIR_PROD = path.join(__dirname, '../ll-server/dist');

// console.log(OUT_DIR, OUT_DIR_PROD);

const outputPaths = [OUT_DIR, OUT_DIR_PROD]

module.exports = outputPaths.map(outputPath => {
  return (env) => {
    return {
      entry: `${IN_DIR}/index.jsx`,
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, outputPath)
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
  }
});




// const spawn = require('child_process').spawn;
// const child = spawn('ls');
// child.stdout.on('data', function (data) {
//     process.stdout.write(data);
// });
// child.stderr.on('data', function (data) {
//     process.stderr.write(data);
// });


// const exportFunc = ( env ) => {
//   console.log('webpack.config.js-exportFunc', OUT_DIR);
//   return {
//     entry: `${IN_DIR}/index.jsx`,
//     output: {
//       filename: 'bundle.js',
//       path: '/Users/c/_top/ll-client/dist'
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/,
//           use: [ 'style-loader', 'css-loader' ]
//         },
//         {
//           test: /\.jsx?/,
//           include: IN_DIR,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env', '@babel/preset-react'],
//               plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
//             }
//           }
//         }
//       ]
//     }
//   };
// };

// module.exports = exportFunc;
