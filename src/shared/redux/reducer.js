import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import shopReducer, {SHOP_REDUCER_KEY} from 'shared/views/Shop/reducer';
import countriesReducer, {COUNTRIES_REDUCER_KEY} from 'shared/views/Countries/reducer';

export default combineReducers({
	[SHOP_REDUCER_KEY]: shopReducer,
	[COUNTRIES_REDUCER_KEY]: countriesReducer,
	routing: routerReducer
});
