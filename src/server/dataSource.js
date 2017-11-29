import products from 'fixtures/products';

export default {
	fetchProducts: () => new Promise((resolve, reject) => {
		setTimeout(() => resolve(products), getRandomInt(200, 300));
	}),
	fetchTitle: () => new Promise((resolve, reject) => {
		setTimeout(() => resolve('Shop title'), getRandomInt(350, 400));
	})
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
