import { Component } from 'react'
export default class GetPosts extends Component {
    state = { posts: "", url: "", submit: "" }

    getUrl = (e) => {
        this.setState({ url: e.target.value })
    }

    getPosts = () => {
        const url = this.state.url
        console.log(url);
        if (url === "" || url === undefined || url[0] === " " || url === null) return this.setState({posts:"empty Url"}) 
        fetch('http://example.com/movies.json')
        .then(response => response.json())
            .then((res) => {
                console.log(url)
                this.setState({ posts: res.data })
            })
            .catch((err) =>  this.setState({posts:`${err}`}))
            .then()

    }
    render() {
        let posts = []
        if (Array.isArray(this.state.posts)) {
            for (const iterator of this.state.posts) {
                posts.push(
                    <div>
                        <p>User Id: {iterator.userId}</p>
                        <p>Id: {iterator.id}</p>
                        <h1>title: {iterator.title}</h1>
                        <p>body: {iterator.body}</p>
                    </div>
                )
            }
        } else if (this.state.posts) if(typeof this.state.posts==="object"){posts = [<> <p>User Id: {this.state.posts.userId}</p>
            <p>Id: {this.state.posts.id}</p>
            <h1>title: {this.state.posts.title}</h1>
            <p>body: {this.state.posts.body}</p></>]}
            else posts= <h1>{this.state.posts}</h1>
        else posts = <h1>waiting for posts..</h1>
        return (
            <div>
                <input autoComplete="true" type="text" onChange={this.getUrl} />
                <button onClick={this.getPosts}>Get post</button>
                {posts}
            </div>
        )
    }
}
