import useFetch from "./useFetch"
import "./useFetch.css"
export default function ExampleUseFetch() {
    const [data,error,isLoading] =useFetch("https://jsonplaceholder.typicode.com/posts")
    const errorHandle=error?<h1>error</h1>:false
    // console.log(typeof data);
    console.log( data.length);
        
    // console.log(data.fulfilled);
    return (
        <div className={isLoading?"loader":null}>
            {data.map((it,i)=>{
                return <p>{it.title}</p>
            })}
            {errorHandle?<h1>error</h1>:null}
        </div>
    )
}
