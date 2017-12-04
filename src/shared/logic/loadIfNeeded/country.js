export default (props, dispatchLoadingAction) => {
	const {match, country} = props;

	if (!country || country.iso2Code !== match.params.iso2Code) {
		return dispatchLoadingAction(match.params.iso2Code);
	}
};
