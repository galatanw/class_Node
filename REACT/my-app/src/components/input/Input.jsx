const Input=()=>{
return(
    <input onChange={(e)=>{console.log(e.target.value);}} placeholder="city"/>
)
}
export default Input