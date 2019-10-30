import axios from 'axios';

export function addTask(data) {

  return dispatch => {
    axios
      .post('http://localhost:1234/items/create', data)
      .then((res) => {
        dispatch({
          type: "ADD_ITEM",
          payload: res.data
        })
      })
  }
}