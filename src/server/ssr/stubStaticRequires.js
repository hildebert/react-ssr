import config from '../../../config/config';

const filenameToRelativeURL = (module, filename) => {
	module.exports = filename
		.replace(config.srcDir, '')
		.replace(/\\/g, '/');
};

/**
 * TODO: require.extentions is deprecated, replace it
 */
require.extensions['.jpg'] = filenameToRelativeURL;
require.extensions['.png'] = filenameToRelativeURL;
require.extensions['.scss'] = () => {};