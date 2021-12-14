import React, { Fragment } from 'react'

export default function SingleVaction({index,vacation,changeStatus}) {
    return (
        <tr>
        <td>{vacation.name}</td>
        <td> {vacation.status?"completed":"active"}</td>
        <td><button onClick={(e)=>changeStatus(e,index)}>change Status</button></td>
        </tr>
    )
}
