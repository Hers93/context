import React, { useState, useReduce } from 'react'
import UserReducer  from './UserReducer'

const UserState = () => {
    const initialState = {
        user:[],
        selectedUser: null
    }

    const [first, setfirst] = useState(initialState)
    const [state, dispatch] = useReducer(UserReducer ,initialState)

    const getUsers =() => {}
    const getProfile = () => {}
}

export default UserState
    

    