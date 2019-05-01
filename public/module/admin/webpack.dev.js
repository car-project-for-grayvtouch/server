const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common , {
	mode: 'development' , 
    devtool: 'inline-source-map',
    devServer: {
        // web 网站根目录
        contentBase: '../../' ,
        host: '0.0.0.0' ,
        port: 9000
    }
});
