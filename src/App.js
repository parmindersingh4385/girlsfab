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
				<Webtopnav></Webtopnav>
				<Router>
					<Route path='/home'><Home/></Route>
					<Route path='/favorites'><Favorites/></Route>
				</Router>
			{/* <Router>
				<Link to='/home'>Home</Link>
				<br/><br/>
				<Link to='/favorites'>Favorites</Link>

				<Route path='/home'><Home/></Route>
				<Route path='/favorites'><Favorites/></Route>
			<Router/> */}

		
			{/* <Home></Home> */}
			{/* <Favorites></Favorites> */}
			{/* <Apparel></Apparel> */}
			{/* <Bags></Bags> */}
			{/* <Shoes></Shoes> */}
		</div>
    );
}

export default App;
