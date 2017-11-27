import Index from 'shared/views/Index';
import Shop from 'shared/views/Shop';
import Countries from 'shared/views/Countries';

export default [{
	path: '/',
	exact: true,
	component: Index
}, {
	path: '/shop',
	exact: true,
	component: Shop
}, {
	path: '/countries',
	exact: true,
	component: Countries
}];
