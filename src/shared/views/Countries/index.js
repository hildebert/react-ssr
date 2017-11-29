import React from 'react';
import {Link} from 'react-router-dom';
import './countries.scss';
import img from 'img/jackson.jpg';

export default class Countries extends React.Component {
	render() {
		return (
			<div className='countries'>
				<Link to='/'>Back</Link>
				<h1>Countries List</h1>
				<img src={img}/>
			</div>
		);
	}
}
