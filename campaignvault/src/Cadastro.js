import { Link } from "react-router-dom";
import './Cadastro.css'
import blog from './res/images/blog.svg';
import Frame42 from './res/images/Frame42.svg'
import Group6 from './res/images/Group6.svg'
import pigup from './res/images/pigup.gif'
import btnCadastro from './res/images/btnCadastro.svg'
import Group3 from './res/images/Group3.svg'
import facebook from './res/images/facebook.svg'
import google from './res/images/google.svg'


export default function Cadastro(){
    return(
        <div id="cadastro">
             <img  id="pigup" alt="pigup"  src={pigup}></img>
             <img  id="Group-6" alt="Group 6"  src={Group6}></img>
             <img  id="Group-3" alt="Group 3"  src={Group3}></img>
             <Link to="/Loginfb"><img  id="facebook" alt="facebook"  src={facebook}></img></Link>
             <Link to="/Logingo"><img  id="google" alt="google"  src={google}></img></Link>


        <div id="Group-7">
            <Link to='/Contato'>Contato</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Criadores'>Criadores</Link>
            </div>
            <div id="header">
                <Link to='/Login'><img alt="frame 42" id="frame42" src={Frame42}></img></Link>
            </div>
            <h1  id='h1Cadastro'>Vamos Começar</h1>
            <div id="Group-1">
                <input type="text" placeholder="Nome"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="tel" placeholder="Celular"></input>
            </div>
            <Link to='/CadastroPressed'><img  id="btnCadastro" alt="btnCadastro"  src={btnCadastro}></img></Link>
            <div id="blog">
                <img alt="blogSVG"  src={blog}/>
            </div>

        </div>
    )
}