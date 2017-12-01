import Index from 'shared/views/Index';
import Shop from 'shared/views/Shop';
import Countries from 'shared/views/Countries';
import Country from 'shared/views/Country';

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
}, {
	path: '/countries/:iso2code',
	exact: true,
	component: Country
}];
