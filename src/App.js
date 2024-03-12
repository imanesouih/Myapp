import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import UserList from './Composants/UserList';
import AddUser from './Composants/AddUser';
import UpdatUser from './Composants/UpdateUser';

function App() {
  return (
    <div style={{paddingLeft :40}}>
      <h1>CRUD REACT-REDUX </h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/add-user' element={<AddUser />}/>
        <Route path='/update-user/:id' element={<UpdatUser />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
