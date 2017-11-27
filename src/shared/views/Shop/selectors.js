import {createSelector} from 'reselect';
import {SHOP_REDUCER_KEY} from './reducer';

export const selectShop = () => state => state[SHOP_REDUCER_KEY];

export const selectLoading = () => createSelector(
	selectShop(),
	main => main.loading
);

export const selectProducts = () => createSelector(
	selectShop(),
	main => main.products
);

export const selectCurrentProducts = () => createSelector(
	selectShop(),
	main => main.currentProducts
);

export const cartTotal = () => createSelector(
	selectShop(),
	main => main.currentProducts.reduce((carry, product) => {
		return carry + product.quantity * product.source.price;
	}, 0)
);

export const selectCurrentProductsIds = () => createSelector(
	selectCurrentProducts(),
	currentProducts => currentProducts.map(product => product.id)
);
