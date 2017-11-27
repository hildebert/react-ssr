import ShopSagas from 'shared/views/Shop/sagas';

console.log(ShopSagas);

export default function * saga() {
	yield [
		...ShopSagas
	];
}
