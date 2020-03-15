import { observable, decorate, computed, action } from 'mobx'

class Store {
    tasks = [
        { id: 0, title: 'Create todo-react app', done: false },
        { id: 1, title: 'Add mobX state', done: true },
        { id: 2, title: 'Create simple todo-app', done: false }
      ]

    setTask(payload){
        this.tasks = payload
    }

    get activeTask() {
        return this.tasks.filter(i => !i.done).length
    }

    get sortedTasks() {
        return this.tasks
                    .slice()
                    .sort((a,b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
    }

    addTask(task) {
        this.setTask([...this.tasks, {
            id: this.tasks.length !== 0 ? this.tasks.length : 0,
            title: task,
            done: false
        }])
    }
    
    delTask(id) {
        this.setTask(this.tasks.filter(item => item.id !== id))
    }

    doneTask(id) {
        this.setTask(
            this.tasks.map(item => {
                if(item.id === id){
                    return {
                    ...item,
                    done: true
                    }
                }
                return item
            })
        )
    }
}
Store = decorate(Store, {
    tasks: observable,
    activeTask: computed,
    sortedTasks: computed,
    addTask: action,
    delTask: action,
    doneTask: action
    
})

export default new Store();
