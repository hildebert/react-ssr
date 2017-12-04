export default (props, dispatchLoadingAction) => {
	const {match, indicator} = props;

	if (!indicator || indicator.id !== match.params.indicatorId) {
		return dispatchLoadingAction(match.params.indicatorId);
	}
};
