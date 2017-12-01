import {createAction} from 'redux-actions';

export const loadCountry = createAction('Country.loadCountry', match => match.params ? match.params.iso2code : match);
export const setCountryLoading = createAction('Country.setCountryLoading', (value = true) => value);
export const setCountryLoadingError = createAction('Country.setCountryLoadingError', error => error);
export const setCountry = createAction('Country.setCountry', country => country);
