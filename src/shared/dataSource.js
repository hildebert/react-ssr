const isSSR = require('./utils/isSSR').default;

if (isSSR()) {
	module.exports = require('../server/dataSource').default;
} else {
	module.exports = require('../client/dataSource').default;
}
