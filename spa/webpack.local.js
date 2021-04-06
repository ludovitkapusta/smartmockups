// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default

const styledComponentsTransformer = createStyledComponentsTransformer()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './client/index.tsx',
  mode: process.env.NODE_ENV || 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    globalObject: 'this',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: [/\.(j|t)sx?$/],
        loader: 'awesome-typescript-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'tests/'),
          path.resolve(__dirname, 'assets/')
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer]
          })
        }
      },
      {
        test: [/\.(ttf|woff|woff2|eot)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/dist/fonts/',
              publicPath: 'assets/dist/fonts/'
            }
          }
        ]
      },
      {
        test: [/\.(png|jpg|jpeg|gif)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/dist/img/',
              publicPath: 'assets/dist/img/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /(500).html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8080,
    open: true,
    proxy: {
      '/dev': {
        target: 'https://5lt31zvq40.execute-api.us-east-1.amazonaws.com/',
        secure: false,
        changeOrigin: true
      }
    }
  },
  optimization: {
    usedExports: true,
    mangleWasmImports: true,
    providedExports: true,
    concatenateModules: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          name: 'defaultVendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      isPRODUCTION: JSON.stringify(false)
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new Dotenv()
  ]
}
