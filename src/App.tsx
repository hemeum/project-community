import React from 'react';
import './App.css';
import Home from './pages/Home';
import Community from './pages/Community';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/community" element={<Community></Community>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
