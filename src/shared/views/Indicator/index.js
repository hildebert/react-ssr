import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import loadIndicatorIfNeeded from 'shared/logic/loadIfNeeded/indicator';
import {loadIndicator} from 'shared/logic/indicator/sagas/loadIndicator';
import * as actions from 'shared/logic/indicator/actions';
import * as selectors from 'shared/logic/indicator/selectors';
import './indicator.scss';

export class Indicator extends React.Component {
	static propTypes = {
		loading: PropTypes.bool,
		indicator: PropTypes.object,
		loadIndicator: PropTypes.func
	};

	static preload = match => [[loadIndicator, actions.loadIndicator(match)]];

	componentDidMount() {
		loadIndicatorIfNeeded(this.props, this.props.loadIndicator);
	}

	renderLoading() {
		return 'Loading';
	}

	renderIndicator() {
		const {indicator} = this.props;

		if (!indicator) {
			return null;
		}

		return (
			<div className='indicator'>
				<h1>{indicator.name}</h1>
				<p>{indicator.sourceNote}</p>
				<p>Source: {indicator.sourceOrganization}</p>
			</div>
		);
	}

	render() {
		const {loading} = this.props;

		return (
			<div className='indicator'>
				<Link to='/indicators'>Back</Link>
				{loading ? this.renderLoading() : this.renderIndicator()}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	loading: selectors.selectLoading(),
	indicator: selectors.selectIndicator()
});

export default connect(mapStateToProps, actions)(Indicator);
