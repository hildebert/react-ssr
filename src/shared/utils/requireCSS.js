import isSSR from './isSSR';

export default path => {
	if (isSSR()) {
		require(path);
	}
};
