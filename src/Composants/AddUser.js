import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserAction } from "../Config/action"
import { useNavigate } from "react-router-dom";

function AddUser(){
    // Utilisation de useSelector pour extraire la longueur de la liste des utilisateurs depuis le store Redux
    const count = useSelector(data=>data.users.length);
    //Utilisation de useState pour déclarer deux états locaux : name et email
    const[name, setName] = useState("");
    const[email, setEmail]= useState("");
    //useDispatch est utilisé pour récupérer la fonction dispatch du store Redux
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () =>{
        // // Ici, addUserAction est une action créatrice qui ajoute un nouvel utilisateur avec un ID unique
        dispatch(addUserAction({
            id:count+1 ,
            name: name,
            email:email,
        }))
        navigate('/')

    }
    return(

        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={handleClick}>Enregister</button>
        </form>
    )

}
export default AddUser