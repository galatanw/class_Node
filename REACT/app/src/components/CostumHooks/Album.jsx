import useFetchJsons from './hooks/jsonPlaceHolder'

export default function Albums() {
    const [albums, setalbums] = useFetchJsons("albums")
    return (
        <div>
            {typeof albums===typeof [1]?albums.map((album,id)=>{
                return <p key={id}>{album.title}</p>
            }):null}
        </div>
    )
}
