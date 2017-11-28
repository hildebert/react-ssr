import products from 'fixtures/products';

export default {
	fetchProducts: () => new Promise((resolve, reject) => {
		setTimeout(() => resolve(products), getRandomInt(1500, 4000));
	})
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('CLIENT DATASOURCE');
