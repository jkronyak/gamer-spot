import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about" element={<div>About</div>} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
