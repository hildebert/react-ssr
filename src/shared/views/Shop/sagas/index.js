import loadProductsSaga from './loadProducts';
import loadTitleSaga from './loadTitle';

export default [
	loadProductsSaga(),
	loadTitleSaga()
];
