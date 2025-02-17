import './css/App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import routes from './data/menu';


function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Router>
			<div className="app">
				<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className="main-container">
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} routes={routes} />
					<div className="content" onClick={() => setIsOpen(false)}>
						<Routes>
							{routes.map(({ path, component: Component }, index) => (
								<Route key={index} path={path} element={<Component />} />
							))}
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
