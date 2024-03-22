// Dans votre fichier users.js
import { ADD_USER, UPDATE_USER, DELETE_USER } from "./action";
const initialState = {
    data: [
        { id:1, name:"Imane Souih", email:"Imane.souieh@gmail.com"},
        { id:2, name:"Jouhaina Achergui", email:"Achergui@gmail.com"},
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, data:[...state.data , action.payload.user]}
        case UPDATE_USER:
       
         const user = state.data.find((u) => u.id === parseInt(action.payload.id))
         if (user) {
            user.name = action.payload.name
            user.email = action.payload.email
         }
         return state 
        case DELETE_USER:
            return {...state, data:[...state.data.filter((u) => u.id !== parseInt(action.payload.id))]}
        default:
            return state;
    }
}

export default usersReducer;
