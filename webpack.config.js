
module.exports = {
  entry: "./app/src/index.js",
  output: {
    path: "./webserver/public",
    filename: "app.bundle.js"
  },
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
