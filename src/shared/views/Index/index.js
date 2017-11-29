import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

export default class Index extends React.Component {
	render() {
		return (
			<div className=''>
				<Link to='/shop'>Shop</Link><br/>
				<Link to='/countries'>Countries</Link><br/>
			</div>
		);
	}
}
