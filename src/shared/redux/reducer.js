import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import shopReducer, {SHOP_REDUCER_KEY} from 'shared/views/Shop/reducer';
import countriesReducer, {COUNTRIES_REDUCER_KEY} from 'shared/logic/countries/reducer';
import countryReducer, {COUNTRY_REDUCER_KEY} from 'shared/logic/country/reducer';
import indicatorsReducer, {INDICATORS_REDUCER_KEY} from 'shared/logic/indicators/reducer';
import indicatorReducer, {INDICATOR_REDUCER_KEY} from 'shared/logic/indicator/reducer';

export default combineReducers({
	[SHOP_REDUCER_KEY]: shopReducer,
	[COUNTRIES_REDUCER_KEY]: countriesReducer,
	[COUNTRY_REDUCER_KEY]: countryReducer,
	[INDICATORS_REDUCER_KEY]: indicatorsReducer,
	[INDICATOR_REDUCER_KEY]: indicatorReducer,
	routing: routerReducer
});
