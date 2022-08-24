import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';

function App() {
	return (
		<div id="container">
			<div id="navbar">
				<Link to={'red'}>Red</Link>
				<Link to={'blue'}>Blue</Link>
			</div>

			<div id="main-section">
				<Routes>
					<Route index element={<Red />} />
					<Route path={'red'} element={<Red />} />
					<Route path={'blue'} element={<Blue />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
