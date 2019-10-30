import axios from 'axios';

export function allClear() {

    return dispatch => {
        axios
            .delete('http://localhost:1234/items/delete-done-items')
            .then((res) => {
                dispatch({
                    type: "CLEAR_ALL_DONE",
                    payload: res.data
                })
            })
    }
}
