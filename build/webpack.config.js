// const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
	console.log(' aquiii');
	const user = 'appadmin08@cloud.corp';
	return {
		mode: process.env.NODE_ENV,
		entry: {
			config: [`/home/${user}/projects/config/tema/teste/index.scss`],
		},
		output: {
			filename: '[name].js',
			path: `/home/${user}/projects/config/global-path`,
		},
		module: {
			rules: [
				{
					test: /\.scss$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
		],
	};
};
