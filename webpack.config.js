const webpack  = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      app: "./src/app.ts",
      vendor: "./src/vendor.ts"
    },
    resolve: {
      extensions: ['.js', '.ts']
   },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js"
    },
    module: {
      rules: [
          {
            test: /\.ts$/,
            loader: "ts-loader"
          },
          {
            test: /\.ts$/,
            enforce: "pre",
            loader: 'tslint-loader'
          },
          {
            test: /\.css$/,
            loader: ["style-loader","css-loader"]
          },
          {
            test: /\.scss$/,
            loader: ["style-loader","css-loader?sourceMap","sass-loader?sourceMap"]
          }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          inject : "body"
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        })
    ]
};
