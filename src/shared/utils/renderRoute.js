import React from 'React';
import {Route} from 'react-router-dom';

export default (config, index) => {
	const Comp = config.component;
	return <Route key={index} path={config.path} exact={config.exact} render={props => <Comp {...props} />}/>;
};
