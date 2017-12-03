import {createAction} from 'redux-actions';

export const loadIndicators = createAction('Indicators.loadIndicators');
export const setIndicatorsLoading = createAction('Indicators.setIndicatorsLoading', (value = true) => value);
export const setIndicatorsLoadingError = createAction('Indicators.setIndicatorsLoadingError', error => error);
export const setIndicators = createAction('Indicators.setIndicators', products => products);
