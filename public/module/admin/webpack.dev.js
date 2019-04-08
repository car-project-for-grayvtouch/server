const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common , {
	mode: 'development' , 
	devtool: 'inline-source-map' ,
	devServer: {
		contentBase: path.resolve('../../') ,
		index: 'app.html' ,
		host: '127.0.0.1' ,
		port: 9000 ,
	}
});
