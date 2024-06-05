import './App.css';
import { Contact } from './components/contact';
import Navbar from './components/navbar';
import Project from './components/project';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Home' element={<Navbar/>}/>
      <Route path='Project' element={<Project/>}/>
      <Route path='Contact' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
