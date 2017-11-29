import React from 'react';
import PropTypes from 'prop-types';
import './cart.scss';

export default function Cart({children, total}) {
	if (!total) {
		return null;
	}

	return (
		<div className='cart'>
			<h3 className='cart__title'>Cart</h3>
			{children}
			<div className='cart__total'>{total} &euro;</div>
		</div>
	);
};

Cart.propTypes = {
	children: PropTypes.node,
	total: PropTypes.number
};
