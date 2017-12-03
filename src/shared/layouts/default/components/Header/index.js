import React from 'react';
import MainNav from '../MainNav';
import {pure} from 'recompose';

export const Header = () => (
	<header className='header'>
		<div className='container'>
			<MainNav/>
		</div>
	</header>
);

export default pure(Header);
