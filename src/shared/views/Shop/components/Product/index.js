import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from '../ProductInfo/index';
import classNames from 'classnames';
import pure from 'recompose/pure';
import './product.scss';

export function Product({product, inBasket = false, addToBasket}) {
	const className = classNames({
		'product': true,
		'_in-basket': inBasket
	});

	return (
		<div className={className}>
			<ProductInfo {...product}>
				<button className='product__add-to-basket' onClick={() => addToBasket(product.id)}>Add to basket</button>
			</ProductInfo>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.object,
	addToBasket: PropTypes.func,
	inBasket: PropTypes.bool
};

export default pure(Product);
