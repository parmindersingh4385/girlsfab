import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Favorites from './Favorites';
import Apparel from './Apparel';
import Bags from './Bags';
import Shoes from './Shoes';
import Home from './Home'; 

function Webtopnav() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light customNav">
                <div className="container-fluid ">
                    <div className="paddingNav">
                        <div className="logoArea"><img style={{"width": "60px", "height": "58px"}} src="https://girlsfab.herokuapp.com/logo1.png" className="img-fluid web"/> <img routerLink="/home" src="https://girlsfab.herokuapp.com/m-logo.png" className="img-fluid mobile"/></div>
                        <div className="compNam" routerLink="/home">GirlsFab</div>
                        <div className="topNav">
                            <ul>
                                <Router>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/apparel">Apparel</Link></li>
                                    <li><Link to="/shoes">Shoes</Link></li>
                                    <li><Link to="/bags">Bags</Link></li>
                                    <li><Link to="/favorites">Favorites</Link></li>

                                    <Route path="/home"><Home /></Route>            
                                    <Route path="/apparel"><Apparel /></Route>
                                    <Route path="/shoes"><Shoes /></Route>
                                    <Route path="/bags"><Bags /></Route>
                                    <Route path="/favorites"><Favorites /></Route>

                                </Router>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Webtopnav