import ShopSagas from 'shared/views/Shop/sagas';
import CountriesSagas from 'shared/views/Countries/sagas';
import {all} from 'redux-saga/effects';

export default function * saga() {
	yield all([
		...ShopSagas,
		...CountriesSagas
	]);
}
