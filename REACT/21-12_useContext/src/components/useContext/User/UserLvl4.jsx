import {useContext} from 'react'
import { User } from '../../../Context'
export default function UserLvl4() {
    const user=useContext(User)
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}
