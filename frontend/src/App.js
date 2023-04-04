import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import VideoGames from './components/VideoGames';
import VideoGamePage from './components/VideoGamePage';
import VideoGameSearch from './components/VideoGameSearch';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/games' element={<VideoGames />} />
          <Route path='/search' element={<VideoGameSearch />} />
          <Route path='/games/:id' element={<VideoGamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
