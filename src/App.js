/* import logo from './logo.svg'; */
/* import './App.css'; */

import '../node_modules/font-awesome/scss/font-awesome.scss';

import './styles.scss';
import './favorites.scss';
import Favorites from './components/Favorites';

function App() {
    return (
    <div className="App">
		<Favorites></Favorites>
    </div>
    );
}

export default App;
