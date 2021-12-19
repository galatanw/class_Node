import {Fragment,useEffect,useState} from 'react'

export default function Reddit() {
    const [reddit, setreddit] = useState([])
    const [post, setpost] = useState(initialState)
    useEffect(()=>{
        fetch("https://www.reddit.com/r/reactjs.json")
        .then(resolve=>resolve.json())
        .then(data=>{
            console.log(data.data.children.length);
            const temp=[...reddit]
            for (let index = 0; index <data.data.children.length; index++) {
                temp.push(data.data.children[index].data)
            }
            setreddit(temp)

        }
        )
    },[])
    const getPost =(index)=>{
        setpost(reddit[Number(index)].paramlink)
    }
    return (
        <div>
            {reddit.map((article,i)=>{
                return <Fragment key={i}>
                     <tr>
                     <td style={{fontSize:"small"}} onClick={getPost}>{article.title}</td>
            </tr>
                </Fragment>
            })}
            <div>
            <iframe src={post} height="200" width="300" title="Iframe Example"></iframe>
            </div>

        </div>
    )
}
