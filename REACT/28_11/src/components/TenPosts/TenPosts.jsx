import React, { Component } from 'react'

export default class TenPosts extends Component {
    state = {allPosts:[], posts: [] }
    count=0
componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ allPosts: data,posts: data.slice(this.count, 10) })
            })
            .catch(err => console.error(err))
            .then(data=>{
                let b=this.state.allPosts
                b.push({body:"sadasd"})
                this.setState({allPosts:b})
            })
    }
next=()=>{
    if(this.count<this.state.allPosts.length-11){
        this.count+=10
        let temp=this.state.allPosts.slice(this.count,this.count+10)
        this.setState({posts:temp})
    }
}
back=()=>{
    if(this.count>9){
        this.count-=10
        let temp= this.state.allPosts.slice(this.count,this.count+10)
        this.setState({posts:temp})
    }

}
 render() {
        console.log("---------------");
        return (
            <div>
                <button onClick={this.next}>next</button>
                <button onClick={this.back}>back</button>
                {this.state.posts.map((item, i) => {
                    return <h1 key={i}>{item.body}</h1>
                })}
            </div>
        
        
        )}
}
