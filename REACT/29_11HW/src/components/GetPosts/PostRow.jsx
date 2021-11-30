
export default function PostRow(props){
const post=props.post
const update=props.update
const loc=props.loc
const deleteOne=props.deleteOne
    return (
                <>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td><button id={loc} onClick={deleteOne}>delete</button></td>
                <td><button id={loc} onClick={update}>update</button></td>
                </>
        )
    }
