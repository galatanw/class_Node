import useFetchJsons from './hooks/jsonPlaceHolder'
export default function Comments() {
    const [comments, setcomments] = useFetchJsons("comments")
    const commentsArray=<table><tbody>{comments.map((comment,index  )=>{
        return <tr key={comment.id}>
            <td>{comment.id}</td>
            <td>{comment.name}</td>
            <td>{comment.body}</td>
            </tr>
    })}</tbody></table>
    return (
        <div>
               {commentsArray}
        </div>
    )
}
