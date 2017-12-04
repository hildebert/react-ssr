import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from 'shared/logic/indicators/actions';
import dataSource from 'shared/dataSource';

export function * loadIndicators() {
	try {
		yield put(actions.setIndicatorsLoading());

		const result = yield call(dataSource.fetchIndicators);

		if (result.error) {
			throw new Error(result.error);
		}

		yield put(actions.setIndicatorsLoadingError(false));
		yield put(actions.setIndicators(result));
	} catch (e) {
		console.log('fetchFeeds ERROR', e);
		yield put(actions.setIndicatorsLoadingError(e));
	} finally {
		yield put(actions.setIndicatorsLoading(false));
	}
}

export default function * loadIndicatorsSaga() {
	yield takeLatest(actions.loadIndicators.toString(), loadIndicators);
}
