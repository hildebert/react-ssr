import {createAction} from 'redux-actions';

export const loadProducts = createAction('Shop.loadProducts');
export const loadProductsStart = createAction('Shop.loadProductsStart');
export const loadProductsSuccess = createAction('Shop.loadProductsSuccess', products => products);
export const loadProductsFail = createAction('Shop.loadProductsFail', err => err);
export const addToBasket = createAction('Shop.addToBasket', id => id);
export const removeFromBasket = createAction('Shop.removeFromBasket', id => id);
export const incrementQuantity = createAction('Shop.incrementQuantity', id => id);
export const decrementQuantity = createAction('Shop.decrementQuantity', id => id);
export const changeSku = createAction('Shop.changeSku', (id, event) => ({id, sku: event.target.value}));
