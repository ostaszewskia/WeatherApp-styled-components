import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './App.css';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/weather' element={<Weather />}/>
      </Routes>
    </Router>
  );
}

export default App;
