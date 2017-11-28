import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions.js';
import dataSource from 'shared/dataSource';

export function * loadProducts(action) {
	try {
		const result = yield call(dataSource.fetchProducts);

		if (result.error) {
			throw new Error(result.error);
		}

		yield put(actions.loadProductsSuccess(result));
	} catch (e) {
		console.log('fetchFeeds ERROR', e);
		yield put(actions.loadProductsFail(e));
	} finally {
		// yield put(loadingEnd());
	}
}

export default function * loadProductsSaga() {
	yield takeLatest(actions.loadProducts.toString(), loadProducts);
}
