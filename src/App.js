import './App.css';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';
import About from './contact/About';
import Menu from './layout/Menu';
import CrochetLace from './portfolio/projects/CrochetLace';
import Modal from './portfolio/projects/Modal';
import Print from './portfolio/projects/Print';
import Accessories from './portfolio/projects/Accessories';
import Apparel from './portfolio/projects/Apparel';
import Styling from './portfolio/projects/Styling';
import Swim from './portfolio/projects/Swim';
import Lounge from './portfolio/projects/Lounge';
import Footer from './layout/Footer';
import DotMesh from './portfolio/projects/DotMesh';
import HomePage from './layout/HomePage';
import NotFound from './layout/NotFound';
import Solutions from './portfolio/projects/Solutions';

function App() {
  return (
    <div>
      < Menu />
      <Routes>
        <Route path='*' element={< NotFound/>}/>

        <Route path='/' element={<HomePage/>}/>
        <Route path='mer-portfolio' element={< Portfolio />}/>
        <Route path='about' element={< About />}/>
        <Route path='solutions' element={< Solutions/>}/>
        <Route path='crochet_lace' element={< CrochetLace />}/>
        <Route path='modal' element={< Modal />}/>
        <Route path='dot_mesh' element={< DotMesh />}/>
        <Route path='print' element={< Print />}/>
        <Route path='accessories' element={< Accessories />}/>
        <Route path='apparel' element={< Apparel />}/>
        <Route path='styling' element={< Styling />}/>
        <Route path='swim' element={< Swim />}/>
        <Route path='lounge' element={< Lounge />}/>
       
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
