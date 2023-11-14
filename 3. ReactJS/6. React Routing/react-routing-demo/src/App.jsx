import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

import { Home } from './components/Home'
import { About } from './components/About'
import { Catalog } from './components/Catalog'

function App() {

	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/catalog" element={<Catalog />} />
			</Routes>

			<footer>All rights reserver &copy;</footer>
		</>
	)
}

export default App;
