import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {loadCountries} from './sagas/loadCountries';
import * as actions from './actions';
import * as selectors from './selectors.js';
import './countries.scss';

export class Countries extends React.Component {
	static propTypes = {
		loading: PropTypes.bool,
		countries: PropTypes.array,
		loadCountries: PropTypes.func
	};

	static preload = () => [[loadCountries]];

	componentDidMount() {
		if (!this.props.countries.length) {
			this.props.loadCountries();
		}
	}

	renderLoading() {
		return 'Loading';
	}

	renderCountries() {
		return (
			<ul>
			{this.props.countries.map(country => (<li key={country.iso2Code}><Link to={`/countries/${country.iso2Code}`}>{country.name}</Link></li>))}
			</ul>
		);
	}

	render() {
		const {loading} = this.props;

		return (
			<div className='countries'>
				<Link to='/'>Back</Link>
				<h1>Countries List</h1>
				{loading ? this.renderLoading() : this.renderCountries()}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	loading: selectors.selectLoading(),
	countries: selectors.selectCountries()
});

export default connect(mapStateToProps, actions)(Countries);
