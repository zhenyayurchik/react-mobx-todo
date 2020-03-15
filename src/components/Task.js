import React from 'react'

const Task = ({task, ...props}) => {

    const ActionButton = () => <div className="action-btn">
        {!task.done ? <p onClick={props.doneTask}>✔</p> : <p onClick={props.delTask}>✖</p> }
        </div>  
    
    const className  = 'task ' + (task.done ? 'task-done' : '')
    

    return(
        <div className={className}>
            <p>{task.title}</p>
            <ActionButton></ActionButton>
        </div>
    )
}

export default Task;