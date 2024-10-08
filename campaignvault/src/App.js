
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import Blog from './Blog';
import BlogLogado from './BlogLogado';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/BlogLogado' element={<BlogLogado/>}/>
    </Routes>
  </Router>
  );
}

