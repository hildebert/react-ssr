import {createSelector} from 'reselect';
import {INDICATOR_REDUCER_KEY} from './reducer';

export const selectState = () => state => state[INDICATOR_REDUCER_KEY];

export const selectLoading = () => createSelector(
	selectState(),
	main => main.loading
);

export const selectIndicator = () => createSelector(
	selectState(),
	main => main.indicator
);
