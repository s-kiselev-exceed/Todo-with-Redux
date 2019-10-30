import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends React.Component {

  renderList = () => {
    const { status, list, removeTask, checkTask } = this.props;

    let array = [...list];

    if (status === 'active') {
      array = array.filter((item) => item.checked === false);
    }

    if (status === 'done') {
      array = array.filter((item) => item.checked === true);
    }

    let newItem;

    if (array.length) {
      newItem = array.map((item) => (
        <Item
          checkTask={checkTask}
          removeTask={removeTask}
          key={item.id}
          item={item}
        />
      ));
    }
    return newItem;
  };

  render() {
    return <div className="todo-list">{this.renderList()}</div>;
  }
}

List.propTypes = {
  list: PropTypes.array,
  status: PropTypes.string,
};

List.defaultProps = {
  list: [],
  status: ' ',
};
export default List;
