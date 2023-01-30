import { Route, Routes } from 'react-router-dom'
import './styles/myBG.css';

//components
import NavBar from './components/NavBar';
import About from './pages/About';
import Crud from './pages/Crud';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Dice from './pages/Dice';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dice" element={<Dice />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
