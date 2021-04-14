import React from 'react'
import {useParams} from 'react-router'
const Users=() => {
    const {firstname, lastname} = useParams();
    return (
        <div>
            Users
            {firstname}{lastname}
        </div>
    )
}

export default Users
