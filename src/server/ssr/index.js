import React from 'React';
import {renderToString} from 'react-dom/server';
import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import routes from 'shared/routes';
import createStore, {sagaMiddleware} from 'shared/redux/createStore';
import renderRoute from 'shared/utils/renderRoute';
import getSagasForURL from './getSagasForURL';
import runSagas from './runSagas';
import {ConnectedRouter} from 'react-router-redux';
import {createMemoryHistory} from 'history';

/**
 * TODO: figure out why "routing" part of state set
 * on server is not respected on the client and
 * "@@router/LOCATION_CHANGE" event is fired despite
 * SSR
 */

export default async req => {
	const url = req.originalUrl || req.url;
	const history = createMemoryHistory({initialEntries: [url]});
	const store = createStore({}, history);

	const sagas = getSagasForURL(routes, url);
	await sagaMiddleware.run(runSagas(sagas)).done.then(() => {});

	const html = renderToString(
		<Provider store={store}>
			<ConnectedRouter history={history} location={url} context={{}}>
				<Switch>
					{routes.map(renderRoute)}
				</Switch>
			</ConnectedRouter>
		</Provider>
	);

	return [html, store.getState()];
};
