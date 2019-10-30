import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './App.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    const { text } = item;

    this.state = {
      readOnly: true,
      localText: text,
    };
  }

  onClickClose = () => {
    console.log("++++")
    const { item } = this.props;
    const { _id } = item;
    const { removeTask } = this.props;
    removeTask(_id);
  };

  onChangeBox = () => {
    const { item } = this.props;
    const { _id } = item;
    const { checkTask } = this.props;
    const { checked } = item;
    console.log(checkTask)
    checkTask({
      id: _id,
      checked,
    });
  };

  render() {
    const { item } = this.props;
    const { checked } = item;
    const { id } = item;
    const { readOnly } = this.state;
    const { localText } = this.state;
    return (
      <div className="x-mark">
        <span className="check-box">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={this.onChangeBox}
          />
          <label htmlFor={id} />
        </span>
        <input
          type="text"
          className={checked ? 'input-item line-through-item' : 'input-item'}
          id={id}
          value={localText}
          readOnly={readOnly}
        />
        <span onClick={this.onClickClose} >X</span>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
};

Item.defaultProps = {
  item: {},
};

export default Item;
