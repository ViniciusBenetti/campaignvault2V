import blog from './res/images/blog.svg';
import { Link } from "react-router-dom";
import './Login.css';
import Group6 from './res/images/Group6.svg'
import Frame41 from './res/images/Frame41.svg'
import pigup from './res/images/pigup.gif'


export default function Login(){
    return(
        <div id="login">
            <img  id="pigup" alt="pigup"  src={pigup}></img>
            <img  id="Group-6" alt="Group 6"  src={Group6}></img>

            <div id='Group-4'>
                <input id='email' type='email' placeholder='Email'></input>
                <input id='password' type='password'placeholder='password'></input>

            </div>

            <div id="Group-7">
            <Link to='/Contato'>Contato</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Criadores'>Criadores</Link>
            </div>
            <div id="header">
                <Link to='/Cadastro' id='cadastro'><img alt="frame 21" id="frame21" src={Frame41}></img></Link>
            </div>
            <div id="blog">
                <img alt="blogSVG"  src={blog}/>
            </div>

        </div>
    )
}