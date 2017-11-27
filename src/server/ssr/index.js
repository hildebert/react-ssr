import React from 'React';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import routes from 'shared/routes';
import createStore from 'shared/redux/createStore';
import renderRoute from 'shared/utils/renderRoute';

export default req => {
	const store = createStore();
	const url = req.originalUrl || req.url;

	return renderToString(
		<Provider store={store}>
			<StaticRouter location={url} context={{}}>
				<Switch>
					{routes.map(renderRoute)}
				</Switch>
			</StaticRouter>
		</Provider>
	);
};
