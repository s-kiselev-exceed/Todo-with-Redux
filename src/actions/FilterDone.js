export function filterDone(str) {
    return dispatch => {
        dispatch({
            type: "FILTER_DONE",
            payload: str
        })
    }
}