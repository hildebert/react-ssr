import path from 'path';

export default {
	srcDir: path.resolve(path.join(__dirname, '/../src')),
	serverDir: path.resolve(path.join(__dirname, '/../src/server')),
	clientDir: path.resolve(path.join(__dirname, '/../src/client')),
	sharedDir: path.resolve(path.join(__dirname, '/../src/shared')),
	sourceDir: path.resolve(path.join(__dirname, '/../src')),
	buildDir: path.resolve(path.join(__dirname, '/../build')),
	dllDir: path.join(path.resolve(path.join(__dirname, '/../node_modules')), '_dll'),
	dllFileName: 'vendors.js',
	devPort: 3000,
	prodPort: 8080,
	host: 'localhost'
};
