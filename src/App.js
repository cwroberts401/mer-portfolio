import './App.css';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import Design from './portfolio/Design';
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
import ArtDirection from './portfolio/ArtDirection';
import Spring from './portfolio/projects/Spring';
import TrendAnalysis from './portfolio/projects/TrendAnalysis';
import Summer from './portfolio/projects/Summer';
import Fall from './portfolio/projects/Fall';
import Holiday from './portfolio/projects/Holiday';
import Portfolio from './portfolio/Portfolio';

function App() {
  return (
    <div>
      < Menu />
      <Routes>
        <Route path='*' element={< NotFound/>}/>

        <Route path='/' element={<HomePage/>}/>

        <Route path='design' element={<RequireAuth>< Design /></RequireAuth>}/>
        <Route path='art-direction' element={<RequireAuth>< ArtDirection /></RequireAuth>}/>
        <Route path='about' element={< About />}/>
        <Route path='solutions' element={<RequireAuth>< Solutions /></RequireAuth>}/>
        <Route path='crochet_lace' element={<RequireAuth>< CrochetLace /></RequireAuth>}/>
        <Route path='modal' element={<RequireAuth>< Modal /></RequireAuth>}/>
        <Route path='dot_mesh' element={<RequireAuth>< DotMesh /></RequireAuth>}/>
        <Route path='print' element={<RequireAuth>< Print /></RequireAuth>}/>
        <Route path='accessories' element={<RequireAuth>< Accessories /></RequireAuth>}/>
        <Route path='apparel' element={<RequireAuth>< Apparel /></RequireAuth>}/>
        <Route path='styling' element={<RequireAuth>< Styling /></RequireAuth>}/>
        <Route path='swim' element={<RequireAuth>< Swim /></RequireAuth>}/>
        <Route path='lounge' element={<RequireAuth>< Lounge /></RequireAuth>}/>
        <Route path='spring' element={<RequireAuth>< Spring /></RequireAuth>}/>
        <Route path='trend_analysis' element={<RequireAuth>< TrendAnalysis /></RequireAuth>}/>
        <Route path='summer' element={<RequireAuth>< Summer /></RequireAuth>}/>
        <Route path='fall' element={<RequireAuth>< Fall /></RequireAuth>}/>
        <Route path='holiday' element={<RequireAuth>< Holiday /></RequireAuth>}/>
        <Route path='portfolio' element={<RequireAuth>< Portfolio /></RequireAuth>}/>
       
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
