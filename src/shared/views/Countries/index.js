import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {loadCountries} from 'shared/logic/countries/sagas/loadCountries';
import * as actions from 'shared/logic/countries/actions';
import * as selectors from 'shared/logic/countries/selectors';
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
			<ul className='countries__list'>
			{this.props.countries.map(country => (
				<li key={country.iso2Code} className='countries__list__item'>
					<Link to={`/countries/${country.iso2Code}`}>{country.name}</Link>
				</li>
			))}
			</ul>
		);
	}

	render() {
		const {loading} = this.props;

		return (
			<div className='countries'>
				<h1 className='countries__title'>Countries List</h1>
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
