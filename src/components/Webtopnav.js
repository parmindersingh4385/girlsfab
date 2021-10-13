import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Webtopnav() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light customNav">
                <div className="container-fluid ">
                    <div className="paddingNav">
                        <div className="logoArea"><img src="https://girlsfab.herokuapp.com/logo1.png" className="img-fluid web"/> <img routerLink="/home" src="https://girlsfab.herokuapp.com/m-logo.png" className="img-fluid mobile"/></div>
                        <div className="compNam" routerLink="/home">GirlsFab</div>
                        <div className="topNav">
                            <ul> 
                                <li><Link to="/home" activeClassName="active">Home</Link></li>
                                <li><Link to="/apparel" activeClassName="active">Apparel</Link></li>
                                <li><Link to="/shoes" activeClassName="active">Shoes</Link></li>
                                <li><Link to="/bags" activeClassName="active">Bags</Link></li>
                                <li><Link to="/favorites" activeClassName="active">Favorites</Link></li>                                 
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Webtopnav
