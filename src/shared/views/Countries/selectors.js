import {createSelector} from 'reselect';
import {COUNTRIES_REDUCER_KEY} from './reducer';

export const selectState = () => state => state[COUNTRIES_REDUCER_KEY];

export const selectLoading = () => createSelector(
	selectState(),
	main => main.loading
);

export const selectCountries = () => createSelector(
	selectState(),
	main => main.countries
);
