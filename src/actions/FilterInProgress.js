export function filterInProgress(str) {
    return dispatch => {
        dispatch({
            type: "FILTER_IN_PROGRESS",
            payload: str
        })
    }
}