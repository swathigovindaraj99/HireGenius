const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust to your actual entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Adjust based on your setup
      },
      {
        test: /pdf.worker\.min\.js$/,
        use: 'worker-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'pdfjs-dist$': path.resolve(__dirname, 'node_modules/pdfjs-dist/'),
    },
  },
};
