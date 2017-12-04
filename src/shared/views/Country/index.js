import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {loadCountry} from 'shared/logic/country/sagas/loadCountry';
import * as actions from 'shared/logic/country/actions';
import * as selectors from 'shared/logic/country/selectors';
import {selectIndicators} from 'shared/logic/indicators/selectors';
import {loadIndicators} from 'shared/logic/indicators/actions';
import {loadIndicators as loadIndicatorsSaga} from 'shared/logic/indicators/sagas/loadIndicators';
import './country.scss';

export class Country extends React.Component {
	static propTypes = {
		loading: PropTypes.bool,
		country: PropTypes.object,
		indicators: PropTypes.array,
		match: PropTypes.object,
		loadCountry: PropTypes.func,
		loadIndicators: PropTypes.func
	};

	static preload = match => [
		[loadCountry, actions.loadCountry(match)],
		[loadIndicatorsSaga]
	];

	componentDidMount() {
		const {match, loadCountry, country, indicators, loadIndicators} = this.props;

		if (!country || country.iso2Code !== match.params.iso2Code) {
			loadCountry(match.params.iso2Code);
		}

		if (!indicators || !indicators.length) {
			loadIndicators(match.params.iso2Code);
		}
	}

	renderLoading() {
		return 'Loading';
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
				<h1>Indicators</h1>
				<ul className='indicators__list'>
					{this.props.indicators.map(indicator => (
						<li key={indicator.id} className='indicators__list__item'>
							<Link to={`/countries/${country.iso2Code}/indicator/${indicator.id}`}>{indicator.name}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}

	render() {
		const {loading} = this.props;

		return (
			<div className='country'>
				<Link to='/countries'>Back</Link>
				{loading ? this.renderLoading() : this.renderCountry()}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	loading: selectors.selectLoading(),
	indicators: selectIndicators(),
	country: selectors.selectCountry()
});

export default connect(mapStateToProps, {...actions, loadIndicators})(Country);
