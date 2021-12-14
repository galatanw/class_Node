import {useState,Fragment}from 'react'
import Select from './Select'
import SingleVaction from './SingleVaction'

export default function Vacations() {
const [vacations,setVacations]=useState(
        [
            {name:"bahamas",status:true},
            {name:"bahamas",status:true},
            {name:"bahamas",status:true},
            {name:"bahamas",status:false},
        ]
    )
const [selceted,setSelect]=useState(null)

// sorting the vacations by their status
const sortByBoolean=(a,b)=>{
    if(a.status===true&& b.status==false)return 1
    else if(a.status==false&& b.status===true)return -1
    else return 0
}
// changing a vacation status
const changeStatus=(e,index)=>{
    const temp=[...vacations]
    temp[index].status=!temp[index].status
    setVacations(temp)
}
// changing the slecet state
const changeSelcet=(e)=>{
    const status=e.target.value==='true'
    if(e.target.value==="all"){
        return setSelect(null)
    }
    setSelect(status)
}

// which vacations to display decided by the selcet state value
const selectVacations=()=>{

    let vacationSort=vacations.sort(sortByBoolean)
    let array=[]
    // show all
    if(selcetVal===null){
    array=vacationSort.map((vacation,index)=>{
        return <Fragment key={index}>
                <SingleVaction changeStatus={changeStatus} index={index} vacation={vacation}/>
                </Fragment>
    })      
    return array
    }
    // show only completed or not completed dependce  on the selected state value
    vacations.forEach((vacation,index)=>{
    if(vacation.status===selceted){
        array.push(
        <Fragment key={index}>
        <SingleVaction changeStatus={changeStatus} index={index} vacation={vacation}/>
        </Fragment>
        )}
})
return array
}
let vacationsTable=selectVacations()
    return (
        <div>
            <Select changeSelect={changeSelcet}/>
            <table>
                <tbody>
            { vacationsTable}
                </tbody>
            </table>
        </div>
    )
}
