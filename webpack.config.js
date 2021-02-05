const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = env => {
  const isDevelopment = env.NODE_ENV === 'development' || true;
  return {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            publicPath: 'http://localhost:3030/dist/',
            path: 'images/',
            name: '[name]_[hash].[ext]'
          }
        },
        {
          test: /\.less$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [/node_modules/],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        Component: path.resolve(__dirname, './src/components'),
        Helper: path.resolve(__dirname, './src/helper'),
        Theme: path.resolve(__dirname, './src/theme'),
      },
      extensions: ['*', '.tsx', '.ts', '.js', '.jsx', '.less'],
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/src/public/',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'src/public/'),
      port: 3030,
      publicPath: 'http://localhost:3030/dist/',
      hotOnly: true,
      historyApiFallback: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      }),
    ],
  }
};
