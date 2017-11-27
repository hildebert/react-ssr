import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsList({className, children}) {
	return (
		<div className={className}>
			{children}
		</div>
	);
};

ProductsList.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node
};
