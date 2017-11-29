import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from '../ProductInfo/index';
import CartSku from '../CartSku/index';
import pure from 'recompose/pure';
import './cartProduct.scss';

export function CartProduct({id, quantity, source, sku, onIncrement, onDecrement, onDelete, onSkuChange}) {
	return (
		<article className='cart-product'>
			<ProductInfo {...source}>
				<CartSku options={source.sku} selected={sku} onChange={value => onSkuChange(id, value)} />
			</ProductInfo>
			<aside className='cart-product__controls'>
				<button className='cart-product__controls__item _minus' onClick={() => onDecrement(id)}>-</button>
				<div className='cart-product__controls__qty'>{quantity}</div>
				<button className='cart-product__controls__item _plus' onClick={() => onIncrement(id)}>+</button>
			</aside>
			<aside className='cart-product__price'>
				{source.price * quantity} &euro;
			</aside>
			<button className='cart-product__delete' onClick={() => onDelete(id)}>
				delete
			</button>
		</article>
	);
}

CartProduct.propTypes = {
	id: PropTypes.number,
	quantity: PropTypes.number,
	source: PropTypes.object,
	sku: PropTypes.string,
	onIncrement: PropTypes.func,
	onDecrement: PropTypes.func,
	onDelete: PropTypes.func,
	onSkuChange: PropTypes.func
};

export default pure(CartProduct);
