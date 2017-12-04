import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import loadIndicatorIfNeeded from 'shared/logic/loadIfNeeded/indicator';
import loadCountryIfNeeded from 'shared/logic/loadIfNeeded/country';

import {loadIndicator as loadIndicatorSaga} from 'shared/logic/indicator/sagas/loadIndicator';
import {selectIndicator} from 'shared/logic/indicator/selectors';
import {loadIndicator as loadIndicatorAction} from 'shared/logic/indicator/actions';

import {loadCountry as loadCountrySaga} from 'shared/logic/country/sagas/loadCountry';
import {selectCountry} from 'shared/logic/country/selectors';
import {loadCountry as loadCountryAction} from 'shared/logic/country/actions';

import './indicatorByCountry.scss';

export class IndicatorByCountry extends React.Component {
	static propTypes = {
		indicator: PropTypes.object,
		country: PropTypes.object,
		match: PropTypes.object,
		loadCountryAction: PropTypes.func,
		loadIndicatorAction: PropTypes.func
	};

	static preload = match => [
		[loadIndicatorSaga, loadIndicatorAction(match)],
		[loadCountrySaga, loadCountryAction(match)]
	];

	componentDidMount() {
		loadIndicatorIfNeeded(this.props, this.props.loadIndicatorAction);
		loadCountryIfNeeded(this.props, this.props.loadCountryAction);
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

	renderCountry() {
		const {country} = this.props;

		if (!country) {
			return null;
		}

		return (
			<div className='country'>
				<h1>{country.name}</h1>
				<pre>
					{JSON.stringify(country, null, 4)}
				</pre>
			</div>
		);
	}

	render() {
		const {country} = this.props;
		return (
			<div className='indicator'>
				{country && <Link to={`/countries/${country.iso2Code}`}>Back</Link>}
				{this.renderIndicator()}
				{this.renderCountry()}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	country: selectCountry(),
	indicator: selectIndicator()
});

export default connect(mapStateToProps, {
	loadIndicatorAction,
	loadCountryAction
})(IndicatorByCountry);
