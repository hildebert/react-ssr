import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {loadIndicator} from './sagas/loadIndicator';
import * as actions from './actions';
import * as selectors from './selectors.js';
import './indicator.scss';

export class Indicator extends React.Component {
	static propTypes = {
		loading: PropTypes.bool,
		indicator: PropTypes.object,
		match: PropTypes.object,
		loadIndicator: PropTypes.func
	};

	static preload = match => [[loadIndicator, actions.loadIndicator(match)]];

	componentDidMount() {
		const {match, loadIndicator, indicator} = this.props;

		if (!indicator || indicator.id !== match.params.id) {
			loadIndicator(match.params.id);
		}
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
				<pre>
					{JSON.stringify(indicator, null, 4)}
				</pre>
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
