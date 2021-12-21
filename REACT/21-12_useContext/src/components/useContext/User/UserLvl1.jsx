import React from 'react'
import UserLvl2 from "./UserLvl2"
import {User} from "../../../Context"
export default function UserLvl1() {
const user={email:"email@email.com",name:"user"}
    return (
        <div>
        <User.Provider value={user}>
            <UserLvl2/>
        </User.Provider>
        </div>
    )
}
