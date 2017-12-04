import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import loadIndicatorIfNeeded from 'shared/logic/loadIfNeeded/indicator';
import loadCountryIfNeeded from 'shared/logic/loadIfNeeded/country';
import loadIndicatorByCountryDataIfNeeded from 'shared/logic/loadIfNeeded/indicatorByCountryData';

// import {loadIndicatorByCountryData as loadDataSaga} from 'shared/logic/indicatorByCountryData/sagas/loadindicatorByCountryData';
import {selectIndicatorByCountryData as selectData} from 'shared/logic/indicatorByCountryData/selectors';
import {loadIndicatorByCountryData as loadDataAction} from 'shared/logic/indicatorByCountryData/actions';

import {loadIndicator as loadIndicatorSaga} from 'shared/logic/indicator/sagas/loadIndicator';
import {selectIndicator} from 'shared/logic/indicator/selectors';
import {loadIndicator as loadIndicatorAction} from 'shared/logic/indicator/actions';

import {loadCountry as loadCountrySaga} from 'shared/logic/country/sagas/loadCountry';
import {selectCountry} from 'shared/logic/country/selectors';
import {loadCountry as loadCountryAction} from 'shared/logic/country/actions';

import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';

import './indicatorByCountry.scss';

export class IndicatorByCountry extends React.Component {
	static propTypes = {
		indicator: PropTypes.object,
		country: PropTypes.object,
		data: PropTypes.any,
		loadCountryAction: PropTypes.func,
		loadIndicatorAction: PropTypes.func,
		loadDataAction: PropTypes.func
	};

	static preload = match => [
		[loadIndicatorSaga, loadIndicatorAction(match)],
		[loadCountrySaga, loadCountryAction(match)]
	];

	componentDidMount() {
		loadIndicatorIfNeeded(this.props, this.props.loadIndicatorAction);
		loadCountryIfNeeded(this.props, this.props.loadCountryAction);
		loadIndicatorByCountryDataIfNeeded(this.props, this.props.loadDataAction);
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

	renderCountry() {
		const {country} = this.props;

		if (!country) {
			return null;
		}

		return (
			<div className='country'>
				<h1>{country.name}</h1>
				<p>Region: {country.region.value}</p>
				<p>Income level: {country.incomeLevel.value}</p>
				<p>Capital city: {country.capitalCity}</p>
			</div>
		);
	}

	renderData() {
		const {data} = this.props;

		if (typeof data === 'undefined') {
			return null;
		}

		const nonEmptyValues = (data || []).filter(x => x.value);

		if (!nonEmptyValues.length) {
			return <h3>No data for this country</h3>;
		}

		return (
			<div className='country'>
				<h1>Data</h1>

				<div style={{height: '300px', 'max-width': '700px', 'margin': '0 auto'}}>
					<ResponsiveContainer>
						<LineChart height={300} data={nonEmptyValues.reverse()}>
							<Line type='monotone' dataKey='value' stroke='#8884d8'/>
							<CartesianGrid stroke='#ccc'/>
							<XAxis dataKey='date'/>
							<YAxis />
						</LineChart>
					</ResponsiveContainer>
				</div>
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
				{this.renderData()}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	country: selectCountry(),
	indicator: selectIndicator(),
	data: selectData()
});

export default connect(mapStateToProps, {
	loadIndicatorAction,
	loadCountryAction,
	loadDataAction
})(IndicatorByCountry);
