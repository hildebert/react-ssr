import path from 'path';
import webpack from 'webpack';
import config from '../config/config';
import cssMqpacker from 'css-mqpacker';
import autoprefixer from 'autoprefixer';

import defaultLoaders from './util/defaultLoaders.js';

export default {
	cache: true,
	entry: {
		app: path.join(config.clientDir, 'index.js')
	},
	output: {
		path: config.buildDir,
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: config.sharedDir,
			manifest: require(path.join(config.dllDir,
				`vendors-${process.env.NODE_ENV === 'development' ? 'development' : 'production'}-manifest.json`))
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				SSR: JSON.stringify(process.env.SSR),
				WEBPACK: JSON.stringify(true)
			}
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer({
						browsers: ['last 2 versions'],
						remove: false
					}),
					cssMqpacker()
				]
			}
		})
	],
	module: {
		loaders: defaultLoaders
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['.js', '.jsx'],
		alias: {
			style: path.join(config.sourceDir, 'style'),
			img: path.join(config.sourceDir, 'img'),
			fonts: path.join(config.sourceDir, 'fonts')
		}
	}
};
