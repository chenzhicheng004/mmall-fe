var config = {
	entry : {
		'index' : ['./src/page/index/index.js'],	
		'login' : ['./src/page/login/index.js']
	},
	output : {
		path : './dist',
		filename : '[name].js'
	}
};

module.exports = config;