import React from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

class Footer extends React.Component {
    onFilterAll = () => {
        this.props.filterAll("all")
    }
    onFilterDone = () => {
        this.props.filterDone("done")
    }
    onFilterInProgress = () => {
        this.props.filterInProgress("active")
    }
    render() {
        const { status, list, allClear } = this.props;
        const { length } = list.filter((item) => item.checked === false);
        
        return (
            <div className="footer">
                <div>
                    {length}
                    {' '}
                    items left
            </div>
                <div className="filters">
                    <button
                        type="button"
                        className={status === 'all' ? 'button-on' : 'button-off'}
                        onClick={this.onFilterAll}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className={status === 'active' ? 'button-on' : 'button-off'}
                        onClick={this.onFilterInProgress}
                    >
                        Active
                    </button>
                    <button
                        type="button"
                        className={status === 'done' ? 'button-on' : 'button-off'}
                        onClick={this.onFilterDone}
                    >
                        Completed
                    </button>
                </div>
                <div className="clear">
                    <button
                        type="button"
                        className="button-off"
                        onClick={allClear}
                    >
                        Clear completed
                    </button>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    list: PropTypes.array,
    status: PropTypes.string,
};

Footer.defaultProps = {
    list: [],
    status: ' ',
};

export default Footer;