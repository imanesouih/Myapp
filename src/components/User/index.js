
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addUserAction } from "../../reducer/users/action";





function AddUser(){
    // Utilisation de useSelector pour extraire la longueur de la liste des utilisateurs depuis le store Redux
    const[user, setUser]= useState({});
    const users = useSelector((store) => store.users.data);
    const count = users.length;

    const{id} = useParams();

    //useDispatch est utilisé pour récupérer la fonction dispatch du store Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( ()=>{
        if(id){
            //pour la mise a jour 
            const selectedUser = users.find((u) =>u.id === parseInt(id));
            setUser(selectedUser || {});

        }
        else {
            // pour la creation 
            setUser({});
        }
    } , [id])

    const handleClick = () =>{
        // // Ici, addUserAction est une action créatrice qui ajoute un nouvel utilisateur avec un ID unique
        dispatch(addUserAction({
            ...user,
            id:count+1 ,
            
        }));
        navigate('/');

    };

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setUser({...user, [name]: value})

    }
    return(

        <form>
            <label>Name</label>
            <input type="text" value={user.name} onChange={handleChange} 
            name="name"
            />
            <label>Email</label>
            <input type="email" value={user.email} onChange={handleChange}
            name="email"
            />
            <button onClick={handleClick}>Enregister</button>
        </form>
    )

}
export default AddUser