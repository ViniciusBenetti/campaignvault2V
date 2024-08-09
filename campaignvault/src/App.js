
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
    </Routes>
  </Router>
  );
}

