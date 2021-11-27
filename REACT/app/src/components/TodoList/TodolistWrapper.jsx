import React, { Component } from 'react'
import TodoList from './TodoList'

export default class TodolistWrapper extends Component {
    state={
        deletee:true,
    tasks:[
        {task:"homework",status:false},
        {task:"eat",status:false},
        {task:"drink",status:true},
        {task:"sleep",status:false},
        {task:"repeat",status:false},
    ]
    ,
    deletedTasks:[]
}
deleteCheck=(e)=>{
    let myTask=this.state.deletedTasks
    e.target.checked===true?myTask.push(Number(e.target.id)):myTask.splice(myTask.indexOf(e.target.id),1)
    this.setState({deletedTasks:myTask})

}
delteTasks=()=>{
let deletedTasks=this.state.deletedTasks.sort((a,b)=>b-a)
let tasks=this.state.tasks
console.log(deletedTasks);
deletedTasks.map((item,i)=>{
tasks.splice(item,1)
})
this.setState({tasks:tasks})
this.setState({deletedTasks:[]})
}  
updated=(e)=>{
let tasks=this.state.tasks
tasks[e.target.id].status=!tasks[e.target.id].status
this.setState({tasks:tasks})
}
render() {
        console.log(this.state.deletedTasks);
       let confrm;
        if(!this.state.deletee&&this.state.deletedTasks.length>=1)confrm=false
        else confrm=true
        let complete=0
        let uncomplete=0
    
        return (
            <div>            
                <table>
                    <thead>
                        <tr>
                        <td>TASK</td>
                        <td>STATUS</td>
                        <td><button onClick={()=>{this.setState({deletee:!this.state.deletee})}}>DELETE</button></td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.tasks.map((item,i)=>{
                        item.status===false?complete++:uncomplete++
                    return<tr key={i}><TodoList deletee={this.state.deletee} tasks={item} loc={i} deleter={this.deleteCheck} update={this.updated}/></tr>
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                    <td>uncompleted:{uncomplete}</td>
                    <td>completed{complete}</td>
                    <td><button onClick={this.delteTasks} disabled={confrm} >confirm Delete</button></td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
