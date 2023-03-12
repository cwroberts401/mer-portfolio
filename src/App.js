import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';
import About from './contact/About';
import Menu from './layout/Menu';

function App() {
  return (
    <div>
      < Menu />
      <Routes>
        <Route path='/' element={< Portfolio />}/>
        <Route path='about' element={< About />}/>
      </Routes>
    </div>
  );
}

export default App;
