/* import logo from './logo.svg'; */
/* import './App.css'; */

import '../node_modules/font-awesome/scss/font-awesome.scss';

import './styles.scss';
import './favorites.scss';
import './Apparel.scss';
import Favorites from './components/Favorites';
/* import Apparel from './components/Apparel'; */
/* import Bags from './components/Bags'; */
/* import Shoes from './components/Shoes'; */

function App() {
    return (
    <div className="App">
		<Favorites></Favorites>
		{/* <Apparel></Apparel> */}
    {/* <Bags></Bags> */}
    {/* <Shoes></Shoes> */}
    </div>
    );
}

export default App;
