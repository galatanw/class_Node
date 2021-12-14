import React, { Fragment } from 'react'

export default function Select({changeSelect}) {
    return (
        <Fragment>
            <select onChange={changeSelect} name="" id="">
            <option value={null}> all </option>
            <option value={true}> copmleted </option>
            <option value={false}> active </option>
            </select>
        </Fragment>
    )
}
