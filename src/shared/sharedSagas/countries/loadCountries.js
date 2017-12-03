import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../../views/Countries/actions.js';
import dataSource from 'shared/dataSource';

export function * loadCountries() {
	try {
		yield put(actions.setCountriesLoading());

		const result = yield call(dataSource.fetchCountries);

		if (result.error) {
			throw new Error(result.error);
		}

		yield put(actions.setCountriesLoadingError(false));
		yield put(actions.setCountries(result));
	} catch (e) {
		console.log('fetchFeeds ERROR', e);
		yield put(actions.setCountriesLoadingError(e));
	} finally {
		yield put(actions.setCountriesLoading(false));
	}
}

export default function * loadCountriesSaga() {
	yield takeLatest(actions.loadCountries.toString(), loadCountries);
}
