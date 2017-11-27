import 'bootstrap/dist/css/bootstrap.min.css';
import 'style/main.scss';

import React from 'react';
import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createStore from 'shared/redux/createStore';
import routes from 'shared/routes';
import renderRoute from 'shared/utils/renderRoute';
import history from './history';

const store = createStore(window.initialState || {}, history);

export default class RootContainer extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						{routes.map(renderRoute)}
					</Switch>
				</ConnectedRouter>
			</Provider>
		);
	}
}
