import blog from './res/images/blog.svg';
import { Link } from "react-router-dom";
import './Login.css';
import Group6 from './res/images/Group6.svg'
import Frame41 from './res/images/Frame41.svg'
import pigup from './res/images/pigup.gif'
import Frame21 from './res/images/Frame21.svg'
import Group3 from './res/images/Group3.svg'
import facebook from './res/images/facebook.svg'
import google from './res/images/google.svg'


export default function Login(){
    return(
        <div id="login">
            <img  id="pigup" alt="pigup"  src={pigup}></img>
            <img  id="Group-6" alt="Group 6"  src={Group6}></img>
            <img  id="Group-3" alt="Group 3"  src={Group3}></img>
            <Link to="/Loginfb"><img  id="facebook" alt="facebook"  src={facebook}></img></Link>
            <Link to="/Logingo"><img  id="google" alt="google"  src={google}></img></Link>


            <h1  id='h1Login'>Bem Vindo</h1>
            <div id='Group-1'>
                <input id='email' type='email' placeholder='Email'></input>
                <input id='password' type='password'placeholder='password'></input>
                <Link to='/EsqueceuSenha'>Esqueçeu a senha?</Link>

            </div>
            <Link to='/LoginPressed'><img  id="Frame21" alt="Frame 21"  src={Frame21}></img></Link>

            <div id="Group-7">
            <Link to='/Contato'>Contato</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Criadores'>Criadores</Link>
            </div>
            <div id="header">
                <Link to='/Cadastro' ><img alt="frame 41" id="Frame-41" src={Frame41}></img></Link>
            </div>
            <div id="blog">
                <img alt="blogSVG"  src={blog}/>
            </div>

        </div>
    )
}