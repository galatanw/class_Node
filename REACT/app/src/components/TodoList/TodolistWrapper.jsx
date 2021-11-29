import React, { Component } from 'react'
import AddTask from './AddTask'
import TodoList from './TodoList'
import * as styles from "./todolist.module.css"
export default class TodolistWrapper extends Component {
    state = {
        disbaleDelete: true,
        tasks: JSON.parse(localStorage.getItem("tasks")),
        deletedTasks: [],
        addDisplay: false,
        selectAll: false
    }
    
    randomId = () => {
        let n = Math.floor((Math.random() * 0xfffff * 1000000)).toString();
        return 'ID' + n;
    }
    deletePending = (e) => {
        let myTask = this.state.deletedTasks
        let element=e.target
        if (this.state.selectAll && myTask.indexOf(Number(element.id)) === -1) element.checked = true
        myTask.indexOf(Number(element.id)) !== 0 ?
            element.checked === true ? myTask.push(Number(element.id)) : myTask.splice(myTask.indexOf(Number(element.id)), 1)
            : myTask.shift()
        this.setState({ deletedTasks: myTask })
    }
    selectAll = () => {
        let val = !this.state.selectAll
        this.setState({ selectAll: !this.state.selectAll })
        val ?
            this.setState({ deletedTasks: this.state.tasks.map((task, i) => i) }) :
            this.setState({ deletedTasks: [] })
    }
    deleteTasks = () => {
        let deletedTasks = this.state.deletedTasks.sort((a, b) => b - a)
        let tasks = this.state.tasks
        deletedTasks.map((item, i) => {
            return tasks.splice(item, 1)
        })
        this.setState({ tasks: tasks })
        this.setState({ deletedTasks: [] })
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    add_A_Task = (e) => {
        e.preventDefault()
        let form = e.target
        let task = form.task.value
        if (task.match(/^[A-Za-z]/)&&task.length>=3) {
         form.task.placeholder=""
            form.reset()
            let tasks = this.state.tasks
            tasks.push({ task, status: false, taskId: this.randomId() })
            this.setState({ tasks: tasks })
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
        else{
         form.task.placeholder="starts with and have 3 letters"
        form.task.style.borderColor='red';
        setTimeout(()=>form.task.style.borderColor='initial',3000)
    }
    }
    updated = (e) => {
        let tasks = this.state.tasks
        let element=e.target
        tasks[element.id].status = !tasks[element.id].status
        this.setState({ tasks: tasks })
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    render() {
        let disabled;
        if (!this.state.disbaleDelete && this.state.deletedTasks.length >= 1) disabled = false
        else disabled = true
        let completedTasks = 0
        let uncompletedTasks = 0
        let addVisibility = this.state.addDisplay ? "block" : 'none'
        return (
            <div className={styles.wrapper}>
                <div className={styles.tableHead}>
                <table className={styles.table} >
                    <thead >
                        <tr>

                            <td>TASK</td>
                            <td>STATUS</td>
                            <td>UPDATE</td>
                            <td><button onClick={() => { this.setState({ disbaleDelete: !this.state.disbaleDelete }) }}>DELETE</button>
                                <br></br>
                                <button disabled={this.state.disbaleDelete} onClick={this.selectAll}>select all</button></td>
                        </tr>
                    </thead>
                    </table>
                    </div>
                    <div className={styles.tableBody}>
                    <table>
                    <tbody>

                        {this.state.tasks.map((item, i) => {
                            item.status === true ? completedTasks++ : uncompletedTasks++
                            return <tr key={item.taskId}><TodoList disbaleDelete={this.state.disbaleDelete} selectAll={
                                this.state.selectAll?
                                (this.state.deletedTasks.indexOf(i)>=0 ?
                                this.state.selectAll:
                                !this.state.selectAll):""

                            } tasks={item} loc={i} deleter={this.deletePending} update={this.updated} /></tr>
                        })}
                    </tbody>
                    </table>
                    </div> 
                    <div className={styles.tableFoot}>
                    <table>
                    <tfoot>

                        <tr>
                            <td>yet completed = {uncompletedTasks}</td>
                            <td>completed = {completedTasks}</td>
                            <td ><button onClick={() => this.setState({ addDisplay: !this.state.addDisplay })}>+Task</button></td>
                            <td><button onClick={this.deleteTasks} disabled={disabled} >confirm Delete</button></td>
                        </tr>
                    </tfoot>
                </table>
                <AddTask addA_Task={this.add_A_Task} display={addVisibility} />
                </div>
            </div>
        )
    }
}
