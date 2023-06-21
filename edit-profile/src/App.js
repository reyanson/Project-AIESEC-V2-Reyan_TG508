import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import ProfilePage from './component/ProfilePage';
import About from './component/About';
import Lhome from './LetterGen/components/Home';
import Letter from './LetterGen/components/Letter';




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
          <Route exact path='/about/:id' element={<About/>} /> 
          <Route exact path='/lettergenerator' element={<Lhome/>} />
          <Route exact path='/review_letter' element={<Letter/>} />
        </Routes>
      </Router> 

      

  




     
      

    </div>
  );
}

export default App;
