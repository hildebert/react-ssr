import * as actions from './actions';
import {handleActions} from 'redux-actions';

export const INDICATORS_REDUCER_KEY = 'Indicators';

export const initialState = {
	indicators: [],
	loading: false,
	error: undefined
};

export default handleActions({
	[actions.setIndicatorsLoading]: (state, {payload: loading}) => ({
		...state,
		loading
	}),
	[actions.setIndicatorsLoadingError]: (state, {payload: error}) => ({
		...state,
		error
	}),
	[actions.setIndicators]: (state, {payload: indicators}) => ({
		...state,
		indicators
	})
}, initialState);
