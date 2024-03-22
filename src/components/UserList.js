import { useSelector , useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { deleteUserAction } from "../reducer/users/action";

function UserList(){

    const users=useSelector((store)=>store.users.data);
    const dispatch=useDispatch();
    const handleDelete = (id)=>{
        dispatch(deleteUserAction(id))

    }
    return(
        <div>
            <p>
                <Link to="/add-user">
                <button className='btn btn-success my-3'>Add user +</button>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                     <tbody>
                     
                    { users.map((user, index)=> {
                          return(
                           <tr key={index}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                         <td>
                            <Link to={`/update-user/${user.id}`}>
                            <button>Edit</button>
                            </Link>
                            <button onClick={()=>handleDelete(user.id)}>Delete</button>
                        </td>
                          </tr>
                            )
                        })
                    }
                </tbody>
            </table>


     </div>
    )
}
export default UserList