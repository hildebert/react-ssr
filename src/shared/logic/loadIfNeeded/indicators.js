export default (props, dispatchLoadingAction) => {
	if (!props.indicators.length) {
		return dispatchLoadingAction();
	}
};
