import {createAction} from 'redux-actions';

export const loadTitle = createAction('Shop.loadTitle');
export const setTitle = createAction('Shop.setTitle');
export const loadProducts = createAction('Shop.loadProducts');
export const setProductsLoading = createAction('Shop.setProductsLoading', (value = true) => value);
export const setProductsLoadingError = createAction('Shop.setProductsLoadingError', error => error);
export const setProducts = createAction('Shop.setProducts', products => products);
export const addToBasket = createAction('Shop.addToBasket', id => id);
export const removeFromBasket = createAction('Shop.removeFromBasket', id => id);
export const incrementQuantity = createAction('Shop.incrementQuantity', id => id);
export const decrementQuantity = createAction('Shop.decrementQuantity', id => id);
export const changeSku = createAction('Shop.changeSku', (id, event) => ({id, sku: event.target.value}));
