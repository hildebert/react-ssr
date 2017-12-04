import Index from 'shared/views/Index';
import Shop from 'shared/views/Shop';
import Countries from 'shared/views/Countries';
import Country from 'shared/views/Country';
import Indicators from 'shared/views/Indicators';
import Indicator from 'shared/views/Indicator';

export default [{
	path: '/',
	exact: true,
	component: Index,
	menuTitle: 'Main page'
}, {
	path: '/shop',
	exact: true,
	component: Shop,
	menuTitle: 'Shop'
}, {
	path: '/countries',
	exact: true,
	component: Countries,
	menuTitle: 'Countries'
}, {
	path: '/countries/:iso2Code',
	exact: true,
	component: Country
}, {
	path: '/catalogs',
	exact: true,
	component: Countries,
	menuTitle: 'Data Catalogs'
}, {
	path: '/catalogs/:id',
	exact: true,
	component: Country
}, {
	path: '/indicators',
	exact: true,
	component: Indicators,
	menuTitle: 'Indicators'
}, {
	path: '/indicators/:id',
	exact: true,
	component: Indicator
}];
