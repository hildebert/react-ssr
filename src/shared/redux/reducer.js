import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import shopReducer, {SHOP_REDUCER_KEY} from 'shared/views/Shop/reducer';

export default combineReducers({
	[SHOP_REDUCER_KEY]: shopReducer,
	routing: routerReducer
});
