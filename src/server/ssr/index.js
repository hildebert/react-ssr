import React from 'React';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import routes from 'shared/routes';
import createStore, {sagaMiddleware} from 'shared/redux/createStore';
import renderRoute from 'shared/utils/renderRoute';
import getSagasForURL from './getSagasForURL';
import runSagas from './runSagas';

export default async req => {
	const store = createStore();
	const url = req.originalUrl || req.url;

	const sagas = getSagasForURL(routes, url);
	await sagaMiddleware.run(runSagas(sagas)).done.then(() => {});

	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={url} context={{}}>
				<Switch>
					{routes.map(renderRoute)}
				</Switch>
			</StaticRouter>
		</Provider>
	);

	return [html, store.getState()];
};
