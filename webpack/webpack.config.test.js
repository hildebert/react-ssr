import merge from 'merge-deep';
import nodeExternals from 'webpack-node-externals';

import baseWebpackConfig from './webpack.config.base';

export default merge(
	baseWebpackConfig,
	{
		target: 'node',
		externals: [nodeExternals()]
	}
);
