import config from '../../config/config';

export default [{
	test: /\.jsx?$/,
	loader: 'babel-loader',
	include: [
		config.sourceDir
	],
	query: {
		cacheDirectory: true
	}
}, {
	test: /\.scss$/,
	loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
}, {
	test: /\.css$/,
	loaders: ['style-loader', 'css-loader']
}, {
	test: /\.(woff|woff2|ttf|eot)(\?\S*)?$/,
	loader: 'file-loader?name=fonts/[name].[ext]'
}, {
	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	use: [{
		loader: 'svg-url-loader?limit=4096&name=img/svg/[name].[ext]'
	}]
}, {
	test: /\.(png|jpg)$/,
	loaders: ['file-loader?name=img/[name].[ext]', 'img-loader']
}];
