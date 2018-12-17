const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const environment = require('./environment')

const devMode = process.env.NODE_ENV !== 'production'

const customRules = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc'
        }
      },
      {
        test: /\.jsx?|.es6?|.spec.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /(\.css|\.scss|\.sass)$/,
      //   loader: 'style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      // },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new MiniCssExtractPlugin()
  ]
}

module.exports = Object.assign({}, environment, customRules)
