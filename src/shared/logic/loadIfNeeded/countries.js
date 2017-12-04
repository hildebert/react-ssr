export default (props, dispatchLoadingAction) => {
	if (!props.countries.length) {
		return dispatchLoadingAction();
	}
};
