import ShopSagas from 'shared/views/Shop/sagas';
import IndicatorsSagas from 'shared/sharedSagas/indicators/index';
import IndicatorSagas from 'shared/views/Indicator/sagas';
import CountriesSagas from 'shared/sharedSagas/countries/index';
import CountrySagas from 'shared/views/Country/sagas';
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
