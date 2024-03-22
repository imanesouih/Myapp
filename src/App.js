
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import UserList from './components/UserList';

import AddUser from './components/User';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
   // <div style={{paddingLeft :40}}>
     // <h1>CRUD REACT-REDUX </h1>
     <div className ='container'>
      <h2>Crud App</h2>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/add-user' element={<AddUser />}/>
        <Route path='/update-user/:id' element={<AddUser />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
