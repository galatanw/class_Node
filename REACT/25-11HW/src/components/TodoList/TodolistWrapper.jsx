import React, { Component } from 'react'
import AddTask from './AddTask'
import TodoList from './TodoList'

export default class TodolistWrapper extends Component {
        random_hex = () => {
            let n = Math.floor((Math.random() * 0xfffff * 1000000)).toString();
            return 'ID' + n;
        }
    state = {
        disbaleDelete: true,
        tasks: [
            { task: "homework", status: false ,taskId:this.random_hex() },
            { task: "eat", status: false ,taskId:this.random_hex()},
            { task: "drink", status: true,taskId:this.random_hex() },
            { task: "sleep", status: false,taskId:this.random_hex() },
            { task: "repeat", status: false,taskId:this.random_hex() }
        ]
        ,
        deletedTasks: [],
        add:false
    }
    deleteCheck = (e) => {
        let myTask = this.state.deletedTasks
        e.target.checked === true ? myTask.push(Number(e.target.id)) : myTask.splice(myTask.indexOf(e.target.id), 1)
        this.setState({ deletedTasks: myTask })
    }
    add_A_Task=(e)=>{
        e.preventDefault()
        let form=e.target
        let task=form.task.value
        if(task.match(/^[A-Za-z]/))
      {let tasks=this.state.tasks
        tasks.push({task,status:false,taskId:this.random_hex()})
        this.setState({tasks:tasks})}
    }
    delteTasks = () => {
        let deletedTasks = this.state.deletedTasks.sort((a, b) => b - a)
        let tasks = this.state.tasks
        deletedTasks.map((item, i) => {
          return  tasks.splice(item, 1)
        })
        this.setState({ tasks: tasks })
        this.setState({ deletedTasks: [] })
    }
    updated = (e) => {
        let tasks = this.state.tasks
        tasks[e.target.id].status = !tasks[e.target.id].status
        this.setState({ tasks: tasks })
    }
    render() {
        let confrm;
        if (!this.state.disbaleDelete && this.state.deletedTasks.length >= 1) confrm = false
        else confrm = true
        let complete = 0
        let uncomplete = 0
        let addVisibility=this.state.add?"block":'none'
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>UPDATE</td>
                            <td>TASK</td>
                            <td>STATUS</td>
                            <td><button onClick={() => {this.setState({ disbaleDelete: !this.state.disbaleDelete })}}>DELETE</button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((item, i) => {
                                item.status === false ? complete++ : uncomplete++
                            return <tr key={item.taskId}><TodoList disbaleDelete={this.state.disbaleDelete} tasks={item} loc={i} deleter={this.deleteCheck} update={this.updated} /></tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>uncompleted:{uncomplete}</td>
                            <td>completed{complete}</td>
                            <td ><button onClick={()=>this.setState({add:!this.state.add})}>add</button></td>
                            <td><button onClick={this.delteTasks} disabled={confrm} >confirm Delete</button></td>
                        </tr>
                    </tfoot>
                </table>
                <AddTask addA_Task={this.add_A_Task} display={addVisibility}/>
            </div>
        )
    }
}
