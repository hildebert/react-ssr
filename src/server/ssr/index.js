import React from 'React';
import {renderToString} from 'react-dom/server';
import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {createMemoryHistory} from 'history';
import routes from 'shared/routes';
import createStore, {sagaMiddleware} from 'shared/redux/createStore';
import renderRoute from 'shared/utils/renderRoute';
import getSagasForURL from './getSagasForURL';
import runSagas from './runSagas';
import Layout from 'shared/layouts/default';

/**
 * TODO: figure out why "routing" part of state set
 * on server is not respected on the client and
 * "@@router/LOCATION_CHANGE" event is fired despite
 * SSR
 */

function funcName(fn) {
	return fn.toString().match(/^function\s?([^\s(]*)/)[1];
}

export default async req => {
	const url = req.originalUrl || req.url;
	const history = createMemoryHistory({initialEntries: [url]});
	const store = createStore({}, history);

	const sagas = getSagasForURL(routes, url);

	if (sagas.length) {
		console.log('Sagas to run:', sagas.map(x => funcName(x[0])).join(', '));
	}

	await sagaMiddleware.run(runSagas(sagas)).done;

	const html = renderToString(
		<Provider store={store}>
			<ConnectedRouter history={history} location={url}>
				<Layout>
					<span>{/* Needed to substiture CSSTransitionGroup's span on server*/}
						<Switch>
							{routes.map(renderRoute)}
						</Switch>
					</span>
				</Layout>
			</ConnectedRouter>
		</Provider>
	);

	return [html, store.getState()];
};
