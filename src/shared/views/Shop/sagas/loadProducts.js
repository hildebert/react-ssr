import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions.js';
import dataSource from 'shared/dataSource';

export function * loadProducts(action) {
	try {
		yield put(actions.setProductsLoading());

		const result = yield call(dataSource.fetchProducts);

		if (result.error) {
			throw new Error(result.error);
		}

		yield put(actions.setProductsLoadingError(false));
		yield put(actions.setProducts(result));
	} catch (e) {
		console.log('fetchFeeds ERROR', e);
		yield put(actions.setProductsLoadingError(e));
	} finally {
		yield put(actions.setProductsLoading(false));
	}
}

export default function * loadProductsSaga() {
	yield takeLatest(actions.loadProducts.toString(), loadProducts);
}
