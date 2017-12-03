import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../ProductsList';
import Product from '../Product';
import Cart from '../Cart';
import CartProduct from '../CartProduct';
import './shop.scss';

export default function ShopMain(props) {
	const {
		title,
		currentProducts,
		currentProductsIds,
		products,
		cartTotal,
		addToBasket,
		onIncrement,
		onDecrement,
		onDelete,
		onSkuChange
	} = props;

	return (
		<div className='shop'>
			{title && <h1 className='shop__title'>{title}</h1>}
			<ProductsList className='products'>
				{products.map(product => <Product
					key={product.id}
					inBasket={Boolean(currentProductsIds.includes(product.id))}
					product={product}
					addToBasket={addToBasket}
				/>)}
			</ProductsList>
			<Cart total={cartTotal}>
				<ProductsList className='cart-products'>
					{currentProducts.map(product => <CartProduct {...product}
						key={product.id}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						onDelete={onDelete}
						onSkuChange={onSkuChange}
					/>)}
				</ProductsList>
			</Cart>
		</div>
	);
};

ShopMain.propTypes = {
	title: PropTypes.string,
	products: PropTypes.array,
	cartTotal: PropTypes.number,
	currentProducts: PropTypes.array,
	currentProductsIds: PropTypes.array,
	onIncrement: PropTypes.func,
	onDecrement: PropTypes.func,
	onDelete: PropTypes.func,
	onSkuChange: PropTypes.func,
	addToBasket: PropTypes.func
};
