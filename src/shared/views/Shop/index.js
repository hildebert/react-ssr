import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as actions from './actions';
import * as selectors from './selectors.js';
import ShopMain from './components/ShopMain';
import Loader from './components/Loader';
import {loadProducts} from './sagas/loadProducts';
import {loadTitle} from './sagas/loadTitle';

export class Shop extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		loading: PropTypes.bool,
		products: PropTypes.array,
		cartTotal: PropTypes.number,
		currentProducts: PropTypes.array,
		currentProductsIds: PropTypes.array,
		incrementQuantity: PropTypes.func,
		decrementQuantity: PropTypes.func,
		addToBasket: PropTypes.func,
		removeFromBasket: PropTypes.func,
		loadProducts: PropTypes.func,
		loadTitle: PropTypes.func,
		changeSku: PropTypes.func
	};

	static preload = () => [[loadProducts], [loadTitle]];

	handleAddToBasket = id => this.props.addToBasket(id);
	handleIncrement = id => this.props.incrementQuantity(id);
	handleDecrement = id => this.props.decrementQuantity(id);
	handleRemove = id => this.props.removeFromBasket(id);
	handleSkuChange = (id, sku) => this.props.changeSku(id, sku);

	componentDidMount() {
		if (!this.props.products.length) {
			this.props.loadProducts();
		}

		if (!this.props.title) {
			this.props.loadTitle();
		}
	}

	renderShop() {
		return <ShopMain {...this.props}
			onIncrement={this.handleIncrement}
			onDecrement={this.handleDecrement}
			onDelete={this.handleRemove}
			onSkuChange={this.handleSkuChange}
			addToBasket={this.handleAddToBasket}
		/>;
	}

	render() {
		return this.props.loading ? <Loader/> : this.renderShop();
	}
}

const mapStateToProps = createStructuredSelector({
	title: selectors.selectTitle(),
	loading: selectors.selectLoading(),
	products: selectors.selectProducts(),
	currentProducts: selectors.selectCurrentProducts(),
	cartTotal: selectors.cartTotal(),
	currentProductsIds: selectors.selectCurrentProductsIds()
});

export default connect(mapStateToProps, actions)(Shop);
