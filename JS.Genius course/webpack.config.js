const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const moment = require("moment");

module.exports = {
  entry: ["@babel/polyfill", "./index.js",],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean:true,
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              targets: "defaults",
              presets: [
                ['@babel/preset-env']
              ]
            }
          }
        }
      ]
  },
  devServer: {
    port:3000,
  }
};