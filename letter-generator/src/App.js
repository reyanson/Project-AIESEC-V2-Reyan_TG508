// import logo from './logo.svg';
import './App.css';
import LetterGen from './LetterGen';
import Letter from './layout/Letter';
//import Import from './pages/import';
//import Manual from './pages/manual';
//import Register from './register';


function App() {
  // let component
  // switch (window.location.pathname) {

  //   case "/manual":
  //     component =<Manual />
  //     break;

  //   case "/import":
  //     component = <Import />
  //     break;

  //   default:
  //     component =<Manual />
  //     break;
  // }
  return (
    <div className="App">
      <LetterGen />
      {/* <Letter/> */}



      {/* <Register /> */}
      {/* <div className='container'>{component}</div> */}
        
      
    </div>
  );
}

export default App;
