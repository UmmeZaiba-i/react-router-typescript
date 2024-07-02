import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
   <Route path='users' element={<Users/>}>
    <Route path=':userId' element={<Users />}/>
   </Route>
   </Routes>
   </Router>
  );
}

export default App;
