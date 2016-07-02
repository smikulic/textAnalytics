const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname + "/app",
	entry: {
    javascript: "./app.js",
    html: "./index.html"
  },
	output: {
		filename: "app.js",
		path: __dirname + "/dist"
	},
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
	module: {
  	loaders: [
    	{
      	test: /\.js$/,
      	exclude: /node_modules/,
      	loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
    	},
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "file?name=[name].[ext]"
      }
  	]
	},
  plugins: [
    // Output extracted CSS to a file
    new ExtractTextPlugin('app.css')
  ]
}

