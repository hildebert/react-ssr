import {fork, all} from 'redux-saga/effects';

export default sagas => function * () {
	yield all(sagas.map(([saga, ...params]) => fork(saga, ...params)));
};
