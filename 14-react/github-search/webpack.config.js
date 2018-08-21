const path = require('path'); // Play nice with windows

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [
            ['transform-react-jsx']
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
  },
  // TODO: figure out how to open in browser
}

