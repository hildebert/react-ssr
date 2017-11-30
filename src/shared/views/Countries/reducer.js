import * as actions from './actions';
import {handleActions} from 'redux-actions';

export const COUNTRIES_REDUCER_KEY = 'Countries';

export const initialState = {
	countries: [],
	loading: false,
	error: undefined
};

export default handleActions({
	[actions.setCountriesLoading]: (state, {payload: loading}) => ({
		...state,
		loading
	}),
	[actions.setCountriesLoadingError]: (state, {payload: error}) => ({
		...state,
		error
	}),
	[actions.setCountries]: (state, {payload: countries}) => ({
		...state,
		countries
	})
}, initialState);
