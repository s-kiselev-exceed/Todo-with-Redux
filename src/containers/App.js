import React from 'react';
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import List from '../components/List';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { getTasks } from '../actions/GetTasks'
import { addTask } from '../actions/AddTask'
import { removeTask } from '../actions/RemoveTask'
import { checkTask } from '../actions/CheckTask'
import { allClear } from '../actions/ClearAllDone'
import { checkAllDone } from '../actions/CheckAllTasks'
import { filterAll } from '../actions/FilterAll'
import { filterDone } from '../actions/FilterDone'
import { filterInProgress } from '../actions/FilterInProgress'

import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {

    componentDidMount = () => {
        this.props.getTasks()
    }

    render() {
        const { switcher, list, status, addTask,
            removeTask, checkTask, allClear, checkAllDone, filterAll, filterDone, filterInProgress } = this.props;
        return (
            <div>
                <h1 className="todos-header">todos</h1>
                <div className="style-components">
                    <Form
                        addTask={addTask}
                        switcher={switcher}
                        checkAllDone={checkAllDone}
                    />
                    <List
                        checkTask={checkTask}
                        removeTask={removeTask}
                        list={list}
                        status={status}
                    />
                    <Footer
                        list={list}
                        status={status}
                        allClear={allClear}
                        filterAll={filterAll}
                        filterDone={filterDone}
                        filterInProgress={filterInProgress}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    const { list, status, switcher } = store.todo
    return {
        list: list,
        status: status,
        switcher: switcher,
    }
}

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks()),
    addTask: (obj) => dispatch(addTask(obj)),
    removeTask: (id) => dispatch(removeTask(id)),
    checkTask: (id) => dispatch(checkTask(id)),
    allClear: () => dispatch(allClear()),
    checkAllDone: (checked) => dispatch(checkAllDone(checked)),
    filterAll: (str) => dispatch(filterAll(str)),
    filterDone: (str) => dispatch(filterDone(str)),
    filterInProgress: (str) => dispatch(filterInProgress(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
