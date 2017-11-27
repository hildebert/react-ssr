import config from '../../config/config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default new HtmlWebpackPlugin({
	inject: true,
	env: process.env.NODE_ENV,
	hash: true,
	filename: 'index.template.html',
	template: path.join(config.serverDir, '/views/index.ejs')
});
