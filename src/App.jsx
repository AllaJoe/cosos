
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Landing from './sections/Landing';
import ResponsiveAppBar from './components/NavBar'
import NotFound from './sections/NotFound';
import Portfolio from './sections/Portfolio';
import Bio from './sections/Bio';
import Perfil from './sections/Perfil';
import Home from './sections/Home';
import Pruevis from './sections/Pruevis';
/* import Regresar from './components/Regresar'; */




const App = () => {
  return(
    <>
   {/*  <Regresar /> */}
    <ResponsiveAppBar />
    <Routes >
    <Route path="/" element={<Landing />} />
      <Route path="home" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="bio" element={<Bio />} />
      <Route path="pruevis" element={<Pruevis />} />
      
      <Route component={NotFound} />
    </Routes>
    
    </>
  )
}




export default App
