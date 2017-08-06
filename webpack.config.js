
var webpack 			= require('webpack');
var ExtractTextPlugin 	= require("extract-text-webpack-plugin");
var HtmlWebpackPlugin 	= require('html-webpack-plugin');
var WEBPACK_DEV 		= process.env.WEBPACK_DEV || 'dev';
console.log(WEBPACK_DEV);

var getHtmlConfig = function(name){
	return {
		filename : 'view/'+name+'.html',
		template : './src/view/'+name+'.html',
		inject   : true,
		hash     : true,
		chunks   : ['common',name]
	};
}
var config = {
	entry : {
		'common' : ['./src/page/common/index.js'],	
		'index' : ['./src/page/index/index.js'],	
		'login' : ['./src/page/login/index.js']
	},
	output : {
		path : './dist',
		publicPath: "/dist",
		filename : 'js/[name].js'
	},
	module : {
		loaders:[
			{
				test : /\.css$/,
				loader : ExtractTextPlugin.extract("style-loader","css-loader")
        	},
        	{
				test : /\.(png|jpg|gif)\??.*$/,
				loader : 'file-loader?name=resource/[name].[ext]'
        	}
		]
	},
	plugins : [
		new webpack.optimize.CommonsChunkPlugin({
			name : 'common',
			filename : 'js/base.js'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
	]
};

if('dev' === WEBPACK_DEV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8090');
}

module.exports = config;