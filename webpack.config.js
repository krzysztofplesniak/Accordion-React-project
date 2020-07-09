const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = env => {
	const isProduction = env === 'production';

	return {
		entry: './src/index.js',
		devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
		mode: 'development',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			compress: true,
			historyApiFallback: true,
			port: 5000,
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					use: ['babel-loader'],
					include: [path.resolve(__dirname, 'src')],
					exclude: /(node_modules)/,
				},
				{
					test: /\.s?css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: !process.isProduction === 'development',
								reloadAll: true,
							},
						},
						'css-loader',
						'postcss-loader',
						'sass-loader',
					],
				},
			],
		},
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'bundle.js',
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Accordion component',
				template: 'public/index.html',
				filename: 'index.html',
			}),
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
		],
	};
};

// const CSSExtract = new ExtractTextPlugin('styles.css');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// if (process.env.NODE_ENV === 'test') {
//   require('dotenv').config({ path: '.env.test' });
// } else if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config({ path: '.env.development' });
// }

// module.exports = (env) => {
//   const isProduction = env === 'production';
//   const CSSExtract = new ExtractTextPlugin('styles.css');

//   return {
//     entry: ['babel-polyfill', './src/index.js'],
//     output: {
//       path: path.join(__dirname, 'public'),
//       filename: 'bundle.js'
//     },
//     module: {
//       rules: [{
//         // loader: 'babel-loader',
//         use: 'babel-loader',
//         test: /\.js$/,
//         include: [path.resolve(__dirname, 'src')],
//         exclude: /node_modules/
//       }, {
//         test: /\.s?css$/,
//         use: CSSExtract.extract({
//           use: [
//             {
//               loader: 'css-loader',
//               options: {
//                 sourceMap: true
//               }
//             },
//             {
//               loader: 'sass-loader',
//               options: {
//                 sourceMap: true
//               }
//             }
//           ]
//         })
//       }]
//     },
//     plugins: [
//       CSSExtract
//     ],
//     devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
//     devServer: {
//       contentBase: path.join(__dirname, 'public'),
//       historyApiFallback: true,
//       compress: true,
//       port: 9000
//     }
//   };
// };
