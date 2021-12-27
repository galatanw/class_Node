import useFetchJsons from './hooks/jsonPlaceHolder'
export default function Comments() {
    const [comments, setcomments] = useFetchJsons("albums")
    const commentsArray=comments.map((album,id)=>{
        return <p key={id}>{album.title}</p>
    })
    return (
        <div>
               {commentsArray}
        </div>
    )
}
