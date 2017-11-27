import opener from 'opener';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import app from './server-base';
import ejs from 'ejs';
import fs from 'fs';
import config from '../../config/config';
import webpackConfig from '../../webpack/webpack.config.dev';

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true,
	stats: {colors: true},
	serverSideRender: true
}));

app.use(webpackHotMiddleware(compiler));

const htmlTemplate = fs.readFileSync('./src/server/views/index.ejs').toString();

app.use((req, res) => {
	console.log(req.originalUrl || req.url);

	const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;

	let html = ejs.render(htmlTemplate, {
		htmlWebpackPlugin: {
			options: {env: process.env.NODE_ENV}
		},
		cssFiles: assetsByChunkName.main.filter(path => path.endsWith('.css')),
		jsFiles: assetsByChunkName.main.filter(path => path.endsWith('.js'))
	});

	if (process.env.SSR) {
		const content = require('./ssr').default(req);
		html = html.replace('<div id="react-root"></div>', `<div id="react-root">${content}</div>`);
	}

	res.send(html);
});

app.listen(config.devPort, () => {
	console.log(`Listening at ${config.host}:${config.devPort}`);
	opener(`http://${config.host}:${config.devPort}`);
});
