import products from 'fixtures/products';

export default {
	fetchProducts: () => new Promise((resolve, reject) => {
		setTimeout(() => resolve(products), getRandomInt(200, 300));
	}),
	fetchTitle: () => new Promise((resolve, reject) => {
		setTimeout(() => resolve('Shop title'), getRandomInt(350, 400));
	}),
	fetchCountries: async () => {
		const response = await fetch('http://api.worldbank.org/v2/countries?per_page=1000&format=json');
		const result = await response.json();
		return result[1].sort((a, b) => a.name > b.name ? 1 : -1);
	},
	fetchCountry: async (id) => {
		const response = await fetch(`http://api.worldbank.org/v2/countries/${id}?format=json`);
		const result = await response.json();
		return result[1][0];
	}
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// import dataSource from '../server/dataSource';
// export default dataSource;
