import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import shopReducer, {SHOP_REDUCER_KEY} from 'shared/views/Shop/reducer';
import countriesReducer, {COUNTRIES_REDUCER_KEY} from 'shared/views/Countries/reducer';
import countryReducer, {COUNTRY_REDUCER_KEY} from 'shared/views/Country/reducer';
import indicatorsReducer, {INDICATORS_REDUCER_KEY} from 'shared/views/Indicators/reducer';
import indicatorReducer, {INDICATOR_REDUCER_KEY} from 'shared/views/Indicator/reducer';

export default combineReducers({
	[SHOP_REDUCER_KEY]: shopReducer,
	[COUNTRIES_REDUCER_KEY]: countriesReducer,
	[COUNTRY_REDUCER_KEY]: countryReducer,
	[INDICATORS_REDUCER_KEY]: indicatorsReducer,
	[INDICATOR_REDUCER_KEY]: indicatorReducer,
	routing: routerReducer
});
