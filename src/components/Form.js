import React from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

class Form extends React.Component {

    state = {
        name: ""
    }

    onAdd = () => {
        const { addTask } = this.props;
        const { name } = this.state;
        if (name.replace(/\s+/g, ' ').trim()) {
            addTask({
                id: +new Date(),
                text: name.replace(/\s+/g, ' ').trim(),
                checked: false,
            });
        }
        this.setState({ name: '' });
    }

    // Set current value for "name"
    inputValue = (event) => {
        this.setState({ name: event.currentTarget.value });
    };

    // Key "Inter" call next function
    pressKey = (event) => {
        if (event.key === 'Enter') {
            this.onAdd();
        }
    };

    onAllChecked = () => {
        const { checkAllDone, switcher } = this.props
        checkAllDone({ checked: !switcher })
    }

    render() {

        const { switcher } = this.props;
        return (
            <div className="todo-form">
                <span
                    className={
                        switcher === true
                            ? 'main-check-box label'
                            : 'main-check-box label:after'
                    }
                >
                    <input type="checkbox" id="checkbox" onChange={this.onAllChecked} />
                    <label role="link" htmlFor="checkbox" />
                </span>
                <div className="input-form-text">
                    <input
                        className="input-form"
                        readOnly={false}
                        onKeyPress={this.pressKey}
                        onChange={this.inputValue}
                        value={this.state.name}
                        id="name"
                        placeholder="What needs to be done?"
                    />
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    switcher: PropTypes.bool,
};

Form.defaultProps = {
    switcher: true,
};

export default Form;
