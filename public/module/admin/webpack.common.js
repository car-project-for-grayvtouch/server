const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 编译后文件输出路径
const outputDir = 'compiled';
const version = '1.0.2';

module.exports = {
	// 入口
	entry: {
		// 单一入口
		app: ['babel-polyfill' , './source/app.js']
	} ,
	plugins: [
		new CleanWebpackPlugin([outputDir]),
		new HtmlWebpackPlugin({
			filename: 'app.html' ,
			template: 'template.html'
		}) , 
		new VueLoaderPlugin() , 
		new MiniCssExtractPlugin({
			filename: "[name].css?version=" + version ,
			chunkFilename: "[id].css?version=" + version ,
		}) ,
	] , 
	output: {
		filename: 'js/[name].js?version=' + version ,
		path: path.resolve(__dirname , outputDir)
	} , 
	module: {
		rules: [
			{
				test: /\.js/ ,
				// 如果不排除 node_modules，babel 编译速度将会非常慢
				exclude: /node_modules/ , 
				use: {
					loader: 'babel-loader' ,
					options: {
                        "presets": ["@babel/preset-env"] ,
                        plugins: [
                        	// 提升运行速度 详情请查看 https://webpack.js.org/loaders/babel-loader/#root
                        	'@babel/plugin-transform-runtime' ,
							// 支持动态导入语法
							'@babel/plugin-syntax-dynamic-import' ,
						]
					}
				}
			} , 
			{
				test: /\.css/ , 
				use: [
					MiniCssExtractPlugin.loader ,
					// 'vue-style-loader' ,
					{
						loader: 'css-loader' , 
						options: {
							sourceMap: true
						}
					}
				]
			} , 
			{
				test: /\.(png|svg|jpg|gif)$/ , 
				use: [
					{
						loader: 'file-loader' , 
						options: {
							name: 'assets/image/[name].[ext]'
						}
					}
				]
			} , 
			{
				test: /\.vue$/ , 
				loader: 'vue-loader'
			} , 
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/ ,
				use: [
					{
                        loader: 'file-loader' ,
						options: {
                        	name: '[name].[ext]'
						}
					}
				],
			}
		]
	} , 
	resolve: {
		alias: {
			// 依赖
			'vue': 'vue/dist/vue.esm.js' , 
			'vue-router': 'vue-router/dist/vue-router.esm.js' , 
			'vuex': 'vuex/dist/vuex.esm.js' ,

			// 目录别名
            // asset: path.resolve(__dirname , './source/asset') ,
			// _vue: path.resolve(__dirname , './source/vue') ,
			// api: path.resolve(__dirname , './source/api') ,
			// mapping: path.resolve(__dirname , './source/mapping') ,

			// view: path.resolve(__dirname , './source/vue/view') ,
			// router: path.resolve(__dirname , './source/vue/router') ,
			// store: path.resolve(__dirname , './source/vue/store') ,
			// mixin: path.resolve(__dirname , './source/vue/mixin')
		}
	}
};
