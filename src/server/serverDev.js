import opener from 'opener';
import express from 'express';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../../config/config';
import webpackConfig from '../../webpack/webpack.config.dev';
import './ssr/stubStaticRequires';

const app = express();

app.use('/node_modules', express.static(path.join(__dirname, '/../../node_modules')));

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true,
	stats: {colors: true},
	serverSideRender: true
}));

app.use(webpackHotMiddleware(compiler));

const htmlTemplate = fs.readFileSync('./src/server/views/index.ejs').toString();

app.get('/favicon.ico', (req, res) => res.send(''));

app.use(async (req, res) => {
	try {
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
			const [content, state] = await require('./ssr').default(req);
			html = html.replace('<div id="react-root"></div>', `<div id="react-root">${content}</div>`);
			html = html.replace('window.__INITIAL_STATE__ = {}', `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`);
		}

		res.send(html);
	} catch (e) {
		console.log(e);
		res.status(500).send(e.toString());
	}
});

app.listen(config.devPort, () => {
	console.log(`Listening at ${config.host}:${config.devPort}`);
	opener(`http://${config.host}:${config.devPort}`);
});
