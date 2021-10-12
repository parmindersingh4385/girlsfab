/* import logo from './logo.svg'; */
/* import './App.css'; */

import '../node_modules/font-awesome/scss/font-awesome.scss';

import './styles.scss';
import './favorites.scss';
import './Apparel.scss';

import Favorites from './components/Favorites';
import Apparel from './components/Apparel';
import Bags from './components/Bags';
import Shoes from './components/Shoes';
import Home from './components/Home'; 
import Webtopnav from './components/Webtopnav'; 


import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
    return (
		<div className="App">
			<Router> 
				{/* <nav className="navbar fixed-top navbar-light customNav">
					<div className="container-fluid ">
						<div className="paddingNav">
							<div className="logoArea"><img style={{"width": "60px", "height": "58px"}} src="https://girlsfab.herokuapp.com/logo1.png" className="img-fluid web"/> <img routerLink="/home" src="https://girlsfab.herokuapp.com/m-logo.png" className="img-fluid mobile"/></div>
							<div className="compNam" routerLink="/home">GirlsFab</div>
							<div className="topNav">
								<ul>									
									<li><Link to="/home">Home</Link></li>
									<li><Link to="/apparel">Apparel</Link></li>
									<li><Link to="/shoes">Shoes</Link></li>
									<li><Link to="/bags">Bags</Link></li>
									<li><Link to="/favorites">Favorites</Link></li> 									
								</ul>
							</div>
						</div>
					</div>
				</nav> */} 
				
				<Webtopnav></Webtopnav>

				<Route exact path="/"><Home/></Route>
				<Route exact path="/home"><Home /></Route>            
				<Route exact path="/apparel"><Apparel /></Route>
				<Route exact path="/shoes"><Shoes /></Route>
				<Route exact path="/bags"><Bags /></Route>
				<Route exact path="/favorites"><Favorites /></Route>
			</Router>
		</div>
    );
}

export default App;
