import './App.css';
import Menu from './components/Menu';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Article from './components/Article';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from './components/Imags';
import Gallery from './components/Gallery';

function App() {
	return (
		<div >
			<Menu />
			<Container>
				<Row>
					<Col>
					<Router>
						<Routes>
						<Route path="/order-list" element={<Article />} />
						<Route path="/images" element={<Images />} />
						<Route path="/gallery" element={<Gallery />} />
						</Routes>
					</Router>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
