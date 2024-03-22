export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";





export const addUserAction =(user)=> {
    return {type:"ADD_USER", payload:{user}}
}
export const updatUserAction = (newuser)=>{
    return{type:"UPDATE_USER", payload:{newuser}}
}
export const deleteUserAction =(id)=>{
    return{type:"DELETE_USER", payload:{id}}
}