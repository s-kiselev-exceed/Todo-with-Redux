export function filterAll(str) {
    return dispatch => {
        dispatch({
            type: "FILTER_ALL",
            payload: str
        })
    }
}