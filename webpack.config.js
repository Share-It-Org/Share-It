const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './FrontEnd/src/index.js',
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
    hot: true,
    // proxy: {
    //   '/api': 'http://localhost:3000',
    // },
    proxy: {
      '/api/**': { "target": "http://localhost:3000/", "secure": false }
    },
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
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
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
