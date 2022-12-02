import React, { useState, useReducer } from 'react'
import UserReducer  from './UserReducer'
import UserContext from './UserContext'

const UserState = (props) => {
    const initialState = {
        users:[],
        selectedUser: null
    }

  /*   const [first, setfirst] = useState(initialState) */
    const [state, dispatch] = useReducer(UserReducer ,initialState)
    const url = 'https://reqres.in/api/users'

    const getUsers = async() => {
        await fetch(url)
         .then(res => res.json())
         .then(response => {
            dispatch({
                type:'GET_USERS',
                payload:response.data
            })
         })
         .catch(error => console.error('Error:', error));
     }
       

    const getProfile = async (id) => {
        
        await fetch(url+'/'+id)
         .then(res => res.json())
         .then(response => { 
        dispatch({
            type: 'GET_PROFILE',
            payload: response.data
        })})
         .catch(error => console.error('Error:', error));
        }


    return(
        <UserContext.Provider value={{
            users:state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
            }} >

            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
    

    