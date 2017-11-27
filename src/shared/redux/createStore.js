import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga.js';

export default function configureStore(initialState, history) {
	const sagaMiddleware = createSagaMiddleware();
	const enhancers = [];
	const middleware = [
		sagaMiddleware
	];

	if (process.env.NODE_ENV === 'development') {
		middleware.push(require('redux-logger').default);
	}

	if (history) {
		middleware.push(routerMiddleware(history));
	}

	const composedEnhancers = compose(
		applyMiddleware(...middleware),
		...enhancers
	);

	const store = createStore(reducer, initialState, composedEnhancers);

	let sagaTask = sagaMiddleware.run(function * () {
		yield saga();
	});

	if (module.hot) {
		module.hot.accept('./reducer', () => {
			const nextRootReducer = require('./reducer').default;
			store.replaceReducer(nextRootReducer);
		});

		module.hot.accept('./saga', () => {
			const getNewSagas = require('./saga').default;
			sagaTask.cancel();
			sagaTask.done.then(() => {
				sagaTask = sagaMiddleware.run(function * replacedSaga(action) {
					yield getNewSagas();
				});
			});
		});
	}

	return store;
}
