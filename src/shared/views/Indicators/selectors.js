import {createSelector} from 'reselect';
import {INDICATORS_REDUCER_KEY} from './reducer';

export const selectState = () => state => state[INDICATORS_REDUCER_KEY];

export const selectLoading = () => createSelector(
	selectState(),
	main => main.loading
);

export const selectIndicators = () => createSelector(
	selectState(),
	main => main.indicators
);
