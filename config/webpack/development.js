const environment = require('./environment')

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
        test: /(\.css|\.scss|\.sass)$/,
        loader: 'style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  }
}

module.exports = Object.assign({}, environment, customRules)
