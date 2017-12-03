import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './default.scss';

export default function Layout({children}) {
	return (
		<div className='main'>
			<header className='header'>
				<div className='container'>
					<nav className='main-nav'>
						<NavLink to='/' className='main-nav__item' activeClassName='_active'>Main page</NavLink>
						<NavLink to='/shop' className='main-nav__item' activeClassName='_active'>Shop</NavLink>
						<NavLink to='/countries' className='main-nav__item' activeClassName='_active'>Countries</NavLink>
					</nav>
				</div>
			</header>
			<div className='container'>
				{children}
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node
};
