import {useState,useEffect} from 'react'

export default function useFetchJsons(initialState){
    const [data , setdata] = useState([])
    useEffect(()=>{
        "render"
        fetch(`https://jsonplaceholder.typicode.com/${initialState}`)
        .then(resolve=>resolve.json())
        .then(jsons=>
            {return setdata(jsons);})
    },[])
    return [data,setdata]
}