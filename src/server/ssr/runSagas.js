import {fork} from 'redux-saga/effects';

export default (sagas) => function * () {
	for (let i = 0; i < sagas.length; i++) {
		const [saga, ...params] = sagas[i];
		yield fork(saga, ...params);
	}
};
