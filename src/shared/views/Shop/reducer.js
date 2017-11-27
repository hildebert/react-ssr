import * as actions from './actions';
import {handleActions} from 'redux-actions';
// import products from 'fixtures/products';

// const productInCart = products[products.length - 1];

export const SHOP_REDUCER_KEY = 'Shop';

export const initialState = {
	loading: false,
	error: null,
	products: [],
	currentProducts: []
};

export default handleActions({
	[actions.loadProducts]: (state, {payload: products}) => ({
		...state,
		loading: true
	}),
	[actions.loadProductsSuccess]: (state, {payload: products}) => ({
		...state,
		products,
		loading: false,
		error: null
	}),
	[actions.loadProductsFail]: (state, {payload: products}) => ({
		...state,
		loading: false
	}),
	[actions.addToBasket]: (state, {payload: id}) => {
		let index = state.currentProducts.findIndex(x => x.id === id);

		if (index > -1) {
			return state;
		}

		const source = state.products.find(x => x.id === id);

		const newProduct = {
			id,
			quantity: 1,
			sku: source.sku[0],
			source
		};

		return {
			...state,
			currentProducts: [...state.currentProducts, newProduct]
		};
	},
	[actions.incrementQuantity]: (state, {payload: id}) => ({
		...state,
		currentProducts: state.currentProducts.map(
			product => product.id === id
				? {...product, quantity: product.quantity + 1}
				: product
		)
	}),
	[actions.decrementQuantity]: (state, {payload: id}) => ({
		...state,
		currentProducts: state.currentProducts.map(
			product => product.id === id && product.quantity > 1
				? {...product, quantity: product.quantity - 1}
				: product
		)
	}),
	[actions.removeFromBasket]: (state, {payload: id}) => ({
		...state,
		currentProducts: state.currentProducts.filter(product => product.id !== id)
	}),
	[actions.changeSku]: (state, {payload: {id, sku}}) => {
		return {
			...state,
			currentProducts: state.currentProducts.map(
				product => product.id === id
					? {...product, sku}
					: product
			)
		};
	}
}, initialState);
