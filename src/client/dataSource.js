import products from 'fixtures/products';

export default {
	fetchProducts: () => new Promise((resolve, reject) => {
		setTimeout(() => resolve(products), getRandomInt(1500, 2000));
	}),
	fetchTitle: () => new Promise((resolve, reject) => {
		setTimeout(() => resolve('Shop title'), getRandomInt(2500, 3000));
	})
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('CLIENT DATASOURCE');
