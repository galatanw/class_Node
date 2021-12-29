import {useState,useEffect} from 'react'

export default function useFetch(url) {
const [data, setdata] = useState([])
const [isloading, setloading] = useState(true)
const [error, seterror] = useState(false)

useEffect(()=>{
const startFetch=async ()=>{
    try{
    const res = await fetch(url)
    const resolve=  res.status===200?await res.json():false
    await resolve?setdata(resolve):seterror(true)
    }
    catch(err){
    seterror(true)}}
    startFetch().finally(setloading(false))
},[url])
return [data,error,isloading]
}
