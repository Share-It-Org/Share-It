const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './FrontEnd/react-index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: "development",
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    // hot: true,
    // proxy: {
    //   '/api': 'http://localhost:3000',
    // },
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/dist',
    },
    historyApiFallback: true, //this routes us to index.html whenever we 404
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
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      //loading images
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
      },
    ],
  },
};
