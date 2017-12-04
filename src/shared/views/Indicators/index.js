import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {loadIndicators} from 'shared/logic/indicators/sagas/loadIndicators';
import * as actions from 'shared/logic/indicators/actions';
import * as selectors from 'shared/logic/indicators/selectors';
import './indicators.scss';

export class Indicators extends React.Component {
	static propTypes = {
		loading: PropTypes.bool,
		indicators: PropTypes.array,
		loadIndicators: PropTypes.func
	};

	static preload = () => [[loadIndicators]];

	componentDidMount() {
		if (!this.props.indicators.length) {
			this.props.loadIndicators();
		}
	}

	renderLoading() {
		return 'Loading';
	}

	renderIndicators() {
		return (
			<ul className='indicators__list'>
			{this.props.indicators.map(indicator => (
				<li key={indicator.id} className='indicators__list__item'>
					<Link to={`/indicators/${indicator.id}`}>{indicator.name}</Link>
				</li>
			))}
			</ul>
		);
	}

	render() {
		const {loading} = this.props;

		return (
			<div className='indicators'>
				<h1 className='indicators__title'>Indicators List</h1>
				{loading ? this.renderLoading() : this.renderIndicators()}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	loading: selectors.selectLoading(),
	indicators: selectors.selectIndicators()
});

export default connect(mapStateToProps, actions)(Indicators);
