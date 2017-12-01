import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {loadCountry} from './sagas/loadCountry';
import * as actions from './actions';
import * as selectors from './selectors.js';
import './country.scss';

export class Country extends React.Component {
	static propTypes = {
		loading: PropTypes.bool,
		country: PropTypes.object,
		match: PropTypes.object,
		loadCountry: PropTypes.func
	};

	static preload = match => [[loadCountry, actions.loadCountry(match)]];

	componentDidMount() {
		const {match, loadCountry, country} = this.props;

		if (!country || country.iso2Code !== match.params.iso2code) {
			loadCountry(match.params.iso2code);
		}
	}

	renderLoading() {
		return 'Loading';
	}

	renderCountry() {
		const {country} = this.props;

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
	country: selectors.selectCountry()
});

export default connect(mapStateToProps, actions)(Country);
