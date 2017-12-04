import ShopSagas from 'shared/views/Shop/sagas';
import IndicatorsSagas from 'shared/logic/indicators/sagas';
import IndicatorSagas from 'shared/logic/indicator/sagas';
import CountriesSagas from 'shared/logic/countries/sagas';
import CountrySagas from 'shared/logic/country/sagas';
import {all} from 'redux-saga/effects';

export default function * saga() {
	yield all([
		...ShopSagas,
		...CountriesSagas,
		...CountrySagas,
		...IndicatorsSagas,
		...IndicatorSagas
	]);
}
