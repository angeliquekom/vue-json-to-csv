const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      },
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
}

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-json-to-csv.min.js',
      libraryTarget: 'window',
      library: 'VueJsonToCsv',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/JsonToCsv.vue'),
    output: {
      filename: 'vue-json-to-csv.js',
      libraryTarget: 'umd',
      library: 'vue-json-to-csv',
      umdNamedDefine: true
    }
  })
]
