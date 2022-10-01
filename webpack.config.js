const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './FrontEnd/react-index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './FrontEnd/react-index.html',
    }),
  ],
  module: {
    rules: [
      {
        //handling react code with JS and JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      //css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      //loading images
      //   {
      //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //     type: 'asset/resource',
      //   },
    ],
  },
};
