import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Letter from './LetterGen/Letter';
import ProfilePage from './component/ProfilePage';




function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/adduser' element={<AddUser/>} />
          <Route exact path='/edituser/:id' element={<EditUser />} />
          <Route exact path='/viewUser/:id' element={<ViewUser />} />
        </Routes>
      </Router>

      {/* <ProfilePage /> */}





      {/* <Letter /> */}
      

    </div>
  );
}

export default App;
