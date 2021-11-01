const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/inactive-tokens.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'scripts/inactive-tokens.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
