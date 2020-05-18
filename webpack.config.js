const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[
          {loader:'url-loader?limit=10000&mimetype=application/font-woff'}
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[
          {loader:'file-loader'}
        ]
      },
      {
        test: /.*\.(gif|png|jpg?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }

    ],

  }
}