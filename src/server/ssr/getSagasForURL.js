import {matchPath} from 'react-router-dom';
import _ from 'lodash';

export default (routes, url) => {
	return routes.reduce((sagas, route) => {
		const match = matchPath(url, route);

		if (match) {
			const preload = _.get(route, 'component.WrappedComponent.preload');
			sagas = [...sagas, ...(preload ? preload(match) : [])];
		}

		return sagas;
	}, []);
};
