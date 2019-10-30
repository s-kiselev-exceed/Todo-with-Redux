import axios from 'axios';

export function removeTask(id) {

  return dispatch => {
    axios
      .delete(`http://localhost:1234/items/delete-item/${id}`)
      .then((res) => {
        dispatch({
          type: "DELETE_ITEM",
          payload: res.data
        })
      })
  }
}