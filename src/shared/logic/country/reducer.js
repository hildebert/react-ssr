import * as actions from './actions';
import {handleActions} from 'redux-actions';

export const COUNTRY_REDUCER_KEY = 'Country';

export const initialState = {
	country: undefined,
	loading: false,
	error: undefined
};

export default handleActions({
	[actions.setCountryLoading]: (state, {payload: loading}) => ({
		...state,
		loading
	}),
	[actions.setCountryLoadingError]: (state, {payload: error}) => ({
		...state,
		error
	}),
	[actions.setCountry]: (state, {payload: country}) => ({
		...state,
		country
	})
}, initialState);
