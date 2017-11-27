import React from 'react';
import {Link} from 'react-router-dom';
import isSSR from 'shared/utils/isSSR';

if (!isSSR()) {
	require('./countries.scss');
}

export default class Countries extends React.Component {
	render() {
		return (
			<div className='countries'>
				<Link to='/'>Back</Link>
				<h1>Countries List</h1>
			</div>
		);
	}
}
