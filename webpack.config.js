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
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
  	]
	}
}
