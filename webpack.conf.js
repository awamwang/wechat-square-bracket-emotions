var path = require('path')

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: "umd"
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader','ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
