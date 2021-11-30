import React, { Component } from 'react'
import PostRow from "./PostRow"
import * as styles from "./styles.module.css"
export default class GetPost extends Component {
    state = { allPost: [], id: null, title: "", body: "" }
    componentDidMount() {
        console.log('!');
        fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
            .then(res => res.json())
            .then(data => {
                this.setState({ allPost: data })
            })
            .catch(err => console.log(err))
    }
    Update = (e) => {
        e.preventDefault()
        const form = e.target
        let temp = [...this.state.allPost]
        let newPost = { id: this.state.id }
        if (form.title.value.length < 0) newPost.title = this.state.title
        else newPost.title = form.title.value
        if (form.body.value.length < 0) newPost.body = this.state.body
        else newPost.body = form.body.value
        temp[this.state.id - 1] = newPost
        this.setState({
            allPost: temp,
            id: "", 
            title: "",
            body: "" }
        )
    }
    ToUpdate = (e) => {
        const index = e.target.id
        let temp = this.state.allPost[index]
        this.setState({
        id: temp.id,
        body: temp.body,
        title: temp.title,
        })

        
    }
    deleteOne = (e) => {
        const pendingPost = e.target.id
        const temp = this.state.allPost
        temp.splice(pendingPost, 1)
        this.setState({ allPost: temp })
    }
    render() {

        return (
            <div className={styles.table}>
                <div className={styles.tHead}>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Body</td>
                                <td>delete</td>
                                <td>update</td>
                            </tr>
                        </thead>
                    </table>

                </div>
                <div className={styles.tBody}>
                    <table>
                        <tbody>
                            {this.state.allPost.map((item, i) => {
                                return <tr key={item.id}>
                                    <PostRow update={this.ToUpdate} deleteOne={this.deleteOne} loc={i} post={item} />
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className={styles.tFoot}>
                    <form onSubmit={this.Update}>
                        <textarea name="title" placeholder="title" value={this.state.title} cols="30" onChange={e => this.setState({ title: e.target.value })} rows="7" ></textarea>
                        <textarea name="body" placeholder="body" cols="30" rows="7" value={this.state.body} onChange={e => this.setState({ title: e.target.value })} ></textarea>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}
