import webpack from 'webpack';

export default new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false,
		unsafe: true
	},
	output: {
		comments: function(node, comment) {
			if (comment.type === 'comment2') {
				return /@copyright/i.test(comment.value);
			}
		}
	}
});
