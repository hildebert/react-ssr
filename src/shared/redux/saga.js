import ShopSagas from 'shared/views/Shop/sagas';
import CountriesSagas from 'shared/views/Countries/sagas';
import CountrySagas from 'shared/views/Country/sagas';
import {all} from 'redux-saga/effects';

export default function * saga() {
	yield all([
		...ShopSagas,
		...CountriesSagas,
		...CountrySagas
	]);
}
