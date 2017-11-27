import path from 'path';
import express from 'express';
import opener from 'opener';
import fs from 'fs';
import config from '../../config/config.js';

const app = express();
app.use(express.static(config.buildDir));

const htmlTemplate = fs.readFileSync(path.join(config.buildDir, 'index.template.html')).toString();

app.use('*', (req, res) => {
	let html = htmlTemplate;

	if (process.env.SSR && req.originalUrl !== '/favicon.ico') {
		const content = require('./ssr').default(req);
		html = html.replace('<div id="react-root"></div>', `<div id="react-root">${content}</div>`);
	}

	res.send(html);
});

app.listen(config.prodPort, () => {
	console.log(`Listening at ${config.host}:${config.prodPort}`);
	opener(`http://${config.host}:${config.prodPort}`);
});
