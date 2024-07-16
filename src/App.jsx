import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import Contact from './pages/Contact';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/' element={<Home />} />
				<Route path='/customize' element={<Customize />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/terms' element={<Terms />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
