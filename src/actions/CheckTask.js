import axios from 'axios';

export function checkTask(obj) {
  console.log(obj)
  return dispatch => {
    axios
      .put(`http://localhost:1234/items/change-item/${obj.id}`, {
        update: { checked: !obj.checked },
      })
      .then((res) => {
        dispatch({
          type: "CHECK_ITEM",
          payload: obj
        })
      })
  }
}