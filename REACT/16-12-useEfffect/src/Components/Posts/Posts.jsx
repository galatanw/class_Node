import * as styles from "./Post.module.css" 
import { useState, useEffect } from 'react/cjs/react.development'

export default function Posts({ postNum }) {
    const [post, setPost] = useState("")
    const [Loading, setLoading] = useState({})

    const setMessage = (completed) => {
        if (!completed) setLoading({ status:styles.loading })
        else {
           setTimeout(()=> setLoading({ status:styles.complete}),200);
        }
    }

    const getPosts = () => {
        setPost("")
        fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}`, setMessage(false))
            .then((res) => res.json())
            .then((data) => {
                setMessage(true)
                setTimeout(()=>setPost(data),200)
            })
            .catch((error) => console.error(error))
    }
    useEffect(getPosts,[postNum])
    return (
        
        <div>
            <div className={Loading.status }><p>{post.id}</p>
            <p>{post.title}</p></div>
            
        </div>
    )
}
