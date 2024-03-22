import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { updatUserAction } from "../reducer/users/action"
import { useNavigate } from "react-router-dom";
import { useState } from "react"


function UpdateUser(){
    const{id} = useParams()
    const user = useSelector((store)=>store.users.data.find((u)=>u.id===parseInt(id)));
    const[name, setName] = useState(user ? user.name : '');
    const[email, setEmail]= useState(user ? user.email : '');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () =>{
        dispatch(updatUserAction({
            id:id ,
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
export default UpdateUser



