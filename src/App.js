import './App.scss';
// import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
  return (
    <div className="App">    
        <Navbar/>
        <Main/>
        {/* <a href="#main"><ArrowUpwardIcon className="btn-top" sx={{ fontSize: 50 }}/></a> */}
    </div>
  );
}

export default App;
