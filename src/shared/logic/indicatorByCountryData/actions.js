import {createAction} from 'redux-actions';

export const loadIndicatorByCountryData = createAction('IndicatorByCountry.loadIndicatorByCountryData', (iso2Code, indicatorId) => ({iso2Code, indicatorId}));
export const setIndicatorByCountryDataLoading = createAction('IndicatorByCountry.setIndicatorByCountryDataLoading', (value = true) => value);
export const setIndicatorByCountryDataLoadingError = createAction('IndicatorByCountry.setIndicatorByCountryDataLoadingError', error => error);
export const setIndicatorByCountryData = createAction('IndicatorByCountry.setIndicatorByCountryData', data => data);
