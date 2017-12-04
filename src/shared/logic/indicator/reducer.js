import * as actions from './actions';
import {handleActions} from 'redux-actions';

export const INDICATOR_REDUCER_KEY = 'Indicator';

export const initialState = {
	indicator: undefined,
	loading: false,
	error: undefined
};

export default handleActions({
	[actions.loadIndicator]: state => ({
		...state,
		indicator: undefined
	}),
	[actions.setIndicatorLoading]: (state, {payload: loading}) => ({
		...state,
		loading
	}),
	[actions.setIndicatorLoadingError]: (state, {payload: error}) => ({
		...state,
		error
	}),
	[actions.setIndicator]: (state, {payload: indicator}) => ({
		...state,
		indicator
	})
}, initialState);
