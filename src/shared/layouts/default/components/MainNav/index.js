import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import routes from 'shared/routes';

const MainNav = () => {
	console.log('menuRender');
	return (
		<nav className='main-nav'>
			{routes.filter(x => x.menuTitle).map(route => <Item key={route.path} {...route}/>)}
		</nav>
	);
};

export default MainNav;

export const Item = ({menuTitle, exact, path}) =>
	<NavLink exact={exact} to={path} className='main-nav__item' activeClassName='_active'>{menuTitle}</NavLink>;

Item.propTypes = {
	menuTitle: PropTypes.string,
	exact: PropTypes.bool,
	path: PropTypes.string
};
