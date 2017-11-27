import 'regenerator-runtime/runtime';
import React from 'react';
import {render, hydrate} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root.jsx';

const root = document.getElementById('react-root');

const renderWithHot = Component => {
	const fn = process.env.SSR ? hydrate : render;
	fn(
		<AppContainer>
			<Component />
		</AppContainer>,
		root
	);
};

renderWithHot(Root);

if (module.hot) {
	module.hot.accept('./Root.jsx', () => {
		renderWithHot(require('./Root.jsx').default);
	});
}
