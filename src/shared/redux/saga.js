import Shop from 'shared/views/Shop/sagas';
import Indicators from 'shared/logic/indicators/sagas';
import Indicator from 'shared/logic/indicator/sagas';
import Countries from 'shared/logic/countries/sagas';
import Country from 'shared/logic/country/sagas';
import indicatorByCountryData from 'shared/logic/indicatorByCountryData/sagas';
import {all} from 'redux-saga/effects';

export default function * saga() {
	yield all([
		...Shop,
		...Countries,
		...Country,
		...Indicators,
		...Indicator,
		...indicatorByCountryData
	]);
}
