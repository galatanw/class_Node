import useFetchJsons from './hooks/jsonPlaceHolder'

export default function Albums() {
    const [albums, setalbums] = useFetchJsons("albums")
    const albumsArray=<table><tbody>{albums.map((album,index)=>{
        return <tr key={album.id}>
            <td>{album.id}</td>
            <td>{album.title}</td>
            <td>{album.body}</td>
            </tr>
    })}</tbody></table>
    return (
        <div>
            {albumsArray}
        </div>
    )
}
