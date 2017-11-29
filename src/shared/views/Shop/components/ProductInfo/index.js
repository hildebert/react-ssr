import React from 'react';
import PropTypes from 'prop-types';
import './productInfo.scss';

export default function ProductInfo({id, title, description, image, price, children}) {
	return (
		<article className='product-info'>
			<aside className='product-info__image'><img src={image} alt={title} /></aside>
			<div className='product-info__content'>
				<h3 className='product-info__title'>{title}</h3>
				<h3 className='product-info__description'>{description}</h3>
				{children}
			</div>
		</article>
	);
};

ProductInfo.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	children: PropTypes.node
};
