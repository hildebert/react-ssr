import path from 'path';
import webpack from 'webpack';
import config from '../config/config';
import uglifyPlugin from './util/uglifyPlugin';
import defaultLoaders from './util/defaultLoaders';

const dllConfig = {
	entry: {
		vendors: [path.join(config.sharedDir, config.dllFileName)],
		styles: [path.join(config.sharedDir, 'styles')]
	},
	output: {
		path: config.dllDir,
		filename: `[name].${process.env.NODE_ENV}.js`,
		library: '[name]'
	},
	module: {
		loaders: defaultLoaders
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(config.dllDir, `[name]-${process.env.NODE_ENV}-manifest.json`),
			name: '[name]',
			context: config.sharedDir
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	]
};

if (process.env.NODE_ENV === 'production') {
	dllConfig.plugins.push(uglifyPlugin);
};

export default dllConfig;
