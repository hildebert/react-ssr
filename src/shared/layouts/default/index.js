import React from 'react';
import PropTypes from 'prop-types';
import './default.scss';
import Header from './components/Header';

const Layout = ({children}) => {
	return (
		<div className='main'>
			<Header/>
			<div className='container'>
				{children}
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;
