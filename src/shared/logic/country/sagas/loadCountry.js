import {call, put, takeLatest} from 'redux-saga/effects'; // eslint-disable-line
import * as actions from '../actions.js';
import dataSource from 'shared/dataSource'; // eslint-disable-line

export function * loadCountry(action) {
	try {
		yield put(actions.setCountryLoading());

		const result = yield call(dataSource.fetchCountry, action.payload);

		if (result.error) {
			throw new Error(result.error);
		}

		yield put(actions.setCountryLoadingError(false));
		yield put(actions.setCountry(result));
	} catch (e) {
		console.log('fetchFeeds ERROR', e);
		yield put(actions.setCountryLoadingError(e));
	} finally {
		yield put(actions.setCountryLoading(false));
	}
}

export default function * loadCountrySaga() {
	yield takeLatest(actions.loadCountry.toString(), loadCountry);
}
