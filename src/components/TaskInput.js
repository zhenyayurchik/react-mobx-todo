import React from 'react'

class TaskInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newTask: ''
        }

    }

    addTask = () => {
        const { newTask } = this.state
        if(newTask) {
            this.props.addTask(newTask)
            this.setState({
                newTask: ''
            })
        }
    }

    handleChangeValue = e => {
        this.setState({
            newTask: e.target.value
        })

    }

    render(){
        return(
            <div className='task-input'>
                <input
                    onChange={e => this.handleChangeValue(e)}
                    value = {this.state.newTask}
                />
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}

export default TaskInput
