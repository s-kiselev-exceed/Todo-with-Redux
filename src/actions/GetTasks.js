import axios from 'axios';

export function getTasks() {

  return dispatch => {
    axios
      .get('http://localhost:1234/items')
      .then((res) => {
        dispatch({
          type: "GET_ITEMS",
          payload: res.data
        })
      })
  }
}
