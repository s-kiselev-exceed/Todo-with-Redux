import axios from 'axios';

export function checkAllDone(checked) {
    return dispatch => {
        axios
            .put('http://localhost:1234/items/check-all-items', checked)
            .then((res) => {
                dispatch({
                    type: "CHECK_ALL_TASKS",
                    payload: res.data
                })
            })
    }
}