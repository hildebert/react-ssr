import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import shop, {SHOP_REDUCER_KEY} from 'shared/views/Shop/reducer';
import countries, {COUNTRIES_REDUCER_KEY} from 'shared/logic/countries/reducer';
import country, {COUNTRY_REDUCER_KEY} from 'shared/logic/country/reducer';
import indicators, {INDICATORS_REDUCER_KEY} from 'shared/logic/indicators/reducer';
import indicator, {INDICATOR_REDUCER_KEY} from 'shared/logic/indicator/reducer';
import indicatorByCountryData, {INDICATOR_BY_COUNTRY_DATA_REDUCER_KEY} from 'shared/logic/indicatorByCountryData/reducer';

export default combineReducers({
	[SHOP_REDUCER_KEY]: shop,
	[COUNTRIES_REDUCER_KEY]: countries,
	[COUNTRY_REDUCER_KEY]: country,
	[INDICATORS_REDUCER_KEY]: indicators,
	[INDICATOR_REDUCER_KEY]: indicator,
	[INDICATOR_BY_COUNTRY_DATA_REDUCER_KEY]: indicatorByCountryData,
	routing: routerReducer
});
