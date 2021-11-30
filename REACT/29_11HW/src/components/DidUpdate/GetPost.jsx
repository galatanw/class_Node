import React, { Component } from 'react'

export default class GetById extends Component {
    state={post:""}
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "GET" })
        .then(res=>res.json())
        .then(data=>{
            this.setState({post:data})
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.id!==this.props.id&&0<Number(this.props.id)&&Number(this.props.id)<=100){
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, { method: "GET" })
            .then(res=>res.json())
            .then(data=>{
                this.setState({post:data})
            })  
        }
    }
    render() {
        return (
            <div>
              <p>id:{this.state.post.id} title:{this.state.post.title}</p>  
            </div>
        )
    }
}
