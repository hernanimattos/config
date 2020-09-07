// const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
	const user = 'hernanimattos';
	return {
		mode: process.env.NODE_ENV,
		entry: {
			style: [`/Users/${user}/Documents/test/config/tema/teste/index.scss`],
		},
		output: {
			filename: '[name].js',
			path: `/Users/${user}/Documents/test/config/global-path`,
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
