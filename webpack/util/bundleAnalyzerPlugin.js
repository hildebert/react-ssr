import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export default new BundleAnalyzerPlugin({
	analyzerMode: 'server',
	analyzerPort: 9999,
	reportFilename: 'report.html',
	openAnalyzer: true,
	generateStatsFile: true,
	statsFilename: 'stats.json',
	statsOptions: null,
	logLevel: 'info'
});
