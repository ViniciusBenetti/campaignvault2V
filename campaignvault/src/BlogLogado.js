import { Link } from "react-router-dom";
import './Blog.css'
import Line6 from './res/images/Line6.svg'
import user from './res/images/user.svg'
import searchButton from './res/images/searchButton.svg';
import search  from './res/images/search.svg';
import filter from './res/images/filter.svg'
import Ellipse3 from './res/images/Ellipse3.svg'
import Polygon1 from './res/images/Polygon1.svg'

export default function BlogLogado(){
    return(
        <div id="blogblog">
            <img alt="polygon" id="polygon" src={Polygon1}></img>
            <img alt="filter" id="filterBLOG" src={filter}></img>
            <img alt="searchIcon" id="searchIconBLOG" src={search}></img>
            <img alt="line6" id="line6" src={Line6}></img>
            <img alt="search" id="searchButtonBLOG" src={searchButton}></img>
            <input type="text" id="searchBLOG" placeholder="busca..."></input>
            <Link to='/Campanhas'  id="campanhas">Campanhas</Link>
            <img alt="user" id="user" src={user}></img>
            <Link to='/MyAccount' > <img alt="Ellipse" id="Ellipse3" src={Ellipse3}></img></Link>  
            <div id="Group-7BLOG">
            <Link to='/Contato'>Contato</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Criadores'>Criadores</Link>
            </div>
            <div  id='filterInactive'>
                <label for="children1">mais visualizados<input type="checkbox" name="children1"></input></label>
                <label for="children2">mais recentes<input type="checkbox" name="children2"></input></label>
                <label for="children3">tutoriais<input type="checkbox" name="children3"></input></label>
                <label for="children4">verificados<input type="checkbox" name="children4"></input></label>
            </div>
            <h2 id="h3blog">Latest <span>Posts</span></h2>
            <div id="contentBLOG">
                <div id="Group-30BLOG">
                    <div id="card-lastersBLOG">
                        <div id="card-elementBLOG">

                        </div>
                        <div id="card-elementBLOG">
                    

                        </div>
                        <div id="card-elementBLOG">

                        </div>
                        <div id="card-elementBLOG">

                        </div>
                    </div>
                    <div id="card-elementBLOG2">

                    </div>
                </div>
                
            </div>

        </div>
    )
}