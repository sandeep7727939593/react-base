import './css/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './pages/Article';
import Images from './pages/Imags';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from "react";

function App() {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Router>
			<div className="app">
				<Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
				<div className="main-container">
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
					<div className="content">
						<Routes>
							<Route path="/order-list" element={<Article />} />
							<Route path="/images" element={<Images />} />
							<Route path="/gallery" element={<Gallery />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
