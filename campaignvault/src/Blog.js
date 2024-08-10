import { Link } from "react-router-dom";
import './Blog.css'
import Frame19 from './res/images/Frame19.svg';
import Frame20 from './res/images/Frame20.svg';
import searchButton from './res/images/searchButton.svg';
import search  from './res/images/search.svg';
import filter from './res/images/filter.svg'

export default function Blog(){
    return(
        <div id="blogblog">
            <img alt="filter" id="filterBLOG" src={filter}></img>
            <img alt="searchIcon" id="searchIconBLOG" src={search}></img>
            <img alt="search" id="searchButtonBLOG" src={searchButton}></img>
            <input type="text" id="searchBLOG" placeholder="busca..."></input>
            <div id="headerBLOG">
                <Link to='/Login' ><img alt="frame 19" id="frame19" src={Frame19}></img></Link>
                <Link to='/Cadastro' ><img alt="frame 20" id="frame20" src={Frame20}></img></Link>
            </div>
            <div id="Group-7BLOG">
            <Link to='/Contato'>Contato</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Criadores'>Criadores</Link>
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