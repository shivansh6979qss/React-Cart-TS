import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
