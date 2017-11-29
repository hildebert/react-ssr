import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions.js';
import dataSource from 'shared/dataSource';

export function * loadTitle() {
	const result = yield call(dataSource.fetchTitle);
	yield put(actions.setTitle(result));
}

export default function * loadTitleSaga() {
	yield takeLatest(actions.loadTitle.toString(), loadTitle);
}
