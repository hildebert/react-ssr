import React from 'react';
import isSSR from 'shared/utils/isSSR';

if (!isSSR()) {
	require('./loader.scss');
}

export default () => <div className='loader'>Loading products...</div>;
