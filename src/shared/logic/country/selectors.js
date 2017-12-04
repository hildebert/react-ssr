import {createSelector} from 'reselect';
import {COUNTRY_REDUCER_KEY} from './reducer';

export const selectState = () => state => state[COUNTRY_REDUCER_KEY];

export const selectLoading = () => createSelector(
	selectState(),
	main => main.loading
);

export const selectCountry = () => createSelector(
	selectState(),
	main => main.country
);
