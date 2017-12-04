import {createSelector} from 'reselect';
import {INDICATOR_BY_COUNTRY_DATA_REDUCER_KEY} from './reducer';

export const selectState = () => state => state[INDICATOR_BY_COUNTRY_DATA_REDUCER_KEY];

export const selectLoading = () => createSelector(
	selectState(),
	main => main.loading
);

export const selectIndicatorByCountryData = () => createSelector(
	selectState(),
	main => main.data
);
