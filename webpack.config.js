
module.exports = {
  entry: "./app/src/app.js",
  output: {
    path: "./webserver/public",
    filename: "app.bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'env', 'react' ]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
