import React from 'react'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'

function Webtopnav() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light customNav">
                <div className="container-fluid ">
                    <div className="paddingNav">
                        <div className="logoArea"><img src="https://girlsfab.onrender.com/logo1.png" className="img-fluid web"/> <img routerLink="/home" src="https://girlsfab.onrender.com/m-logo.png" className="img-fluid mobile"/></div>
                        <div className="compNam" routerLink="/home">GirlsFab</div>
                        <div className="topNav">
                            <ul> 
                                <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/apparel" activeClassName="active">Apparel</NavLink></li>
                                <li><NavLink to="/shoes" activeClassName="active">Shoes</NavLink></li>
                                <li><NavLink to="/bags" activeClassName="active">Bags</NavLink></li>
                                <li><NavLink to="/favorites" activeClassName="active">Favorites</NavLink></li>                                 
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Webtopnav
