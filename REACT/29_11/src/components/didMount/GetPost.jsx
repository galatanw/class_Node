import React, { Component } from 'react'

export default class GetPost extends Component {
    state={post:""}
    componentDidMount() {
        console.log("mount");
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({post:data})
            })
            .catch()

    }
    componentDidUpdate(prevProps){
        if(prevProps.id!==this.props.id&&Number(this.props.id)>0&&Number(this.props.id)<=100){
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({post:data})
            })
            .catch()
        }

    }
    render() {
        return (
            <div>
                <p>{this.state.post.id}</p>
            </div>
        )
    }
}
