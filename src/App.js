import React from 'react';
import Task from './components/Task'
import TaskInput from './components/TaskInput'
import store from './store/index'

import { observer } from 'mobx-react'

class App extends React.Component {

  render() {
    const { activeTask, sortedTasks } = store


    return (
      <div className='App'>
        <h1 className='top'>Active tasks: {activeTask}</h1>
        {sortedTasks.map(task=>(
          <Task 
            doneTask={()=> store.doneTask(task.id)}
            delTask={()=> store.delTask(task.id)}
            task={task}
            key={task.id}/>
        ))}
        <TaskInput 
          addTask={v => store.addTask(v)}
        />
      </div>
    )
    
  }
}

export default observer(App);
