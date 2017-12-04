export default (props, dispatchLoadingAction) => {
	const {match, indicator, country} = props;

	if ((!indicator || indicator.id !== match.params.indicatorId) || (!country || country.iso2Code !== match.params.iso2Code)) {
		return dispatchLoadingAction(match.params.iso2Code, match.params.indicatorId);
	}
};
