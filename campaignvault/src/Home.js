import "./Home.css"
import blog from './res/images/blog.svg';
import { Link } from "react-router-dom";
import Frame19 from './res/images/Frame19.svg';
import Frame20 from './res/images/Frame20.svg';
import Frame26 from './res/images/Frame26.svg';
import Frame27 from './res/images/Frame27.svg';
import Frame24 from './res/images/Frame24.svg';
import pigup from './res/images/pigup.gif';
import TitleHome from './res/images/TitleHome.svg';


export default function Home(){
    return(
        <div id="home">
             <img  alt="pigup" id='Group-8' src={pigup}/>
            <img id="Group-6" alt="group 6" src={TitleHome}></img>
            <div id="header">
                <Link to='/Login' ><img alt="frame 19" id="frame19" src={Frame19}></img></Link>
                <Link to='/Cadastro' ><img alt="frame 20" id="frame20" src={Frame20}></img></Link>
            </div>
            <div id="cards">
                <Link to='/'><img alt="frame 26"  src={Frame26}></img></Link>
                <Link to='/'><img alt="frame 27"  src={Frame27}></img></Link>
                <Link to='/'><img alt="frame 24"  src={Frame24}></img></Link>
            </div>
            <div id="Group-7">
            <Link to='/Contato'>Contato</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Criadores'>Criadores</Link>
            </div>
            <div id="blog">
                <img alt="blogSVG"  src={blog}/>
            </div>
        </div>
    )
}