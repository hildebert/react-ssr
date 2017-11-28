import ShopSagas from 'shared/views/Shop/sagas';
import {all} from 'redux-saga/effects';

export default function * saga() {
	yield all([
		...ShopSagas
	]);
}
