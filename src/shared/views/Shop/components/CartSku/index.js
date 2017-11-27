import React from 'react';
import PropTypes from 'prop-types';
import isSSR from 'shared/utils/isSSR';

if (!isSSR()) {
	require('./cartSku.scss');
}

export default function CartSku({options, selected, onChange}) {
	return options.length > 1 ? CartSkuSelect({options, selected, onChange}) : CartSkuText(selected);
};

CartSku.propTypes = {
	options: PropTypes.array.isRequired,
	selected: PropTypes.string,
	onChange: PropTypes.func
};

const CartSkuSelect = ({options, selected, onChange}) => (
	<select className='sku-select styled-select' defaultValue={selected} onChange={onChange}>
		{options.map(option => (
			<option key={option}>{option}</option>
		))}
	</select>
);

CartSkuSelect.propTypes = {...CartSku.propTypes};

const CartSkuText = value => (<div className='sku-text'>{value}</div>);

CartSku.propTypes = {
	value: PropTypes.string
};
