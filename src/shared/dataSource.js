const isSSR = require('./utils/isSSR').default;

/**
 * TODO: figure out the way to truly separate client and server datasources
 */

if (isSSR()) {
	module.exports = require('../server/dataSource').default;
} else {
	module.exports = require('../client/dataSource').default;
}
