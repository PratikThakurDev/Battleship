const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // For any .css file
        use: ['style-loader', 'css-loader'], // Process with these loaders
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // or ./src/index.html
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
  },
  mode: 'development',
};
