
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Index from './sections/Index';
import ResponsiveAppBar from './components/NavBar'
import NotFound from './sections/NotFound';
import Portfolio from './sections/Portfolio';
import Bio from './sections/Bio';
import Perfil from './sections/Nuevo';
import Home from './sections/Home';




const App = () => {
  return(
    
    
    
    <>
    <ResponsiveAppBar />
    
    <Routes >
    <Route path="/" element={<Index />} />
      <Route path="bio" element={<Bio />} />
      <Route path="home" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="perfil" element={<Perfil />} />
      <Route component={NotFound} />
    </Routes>
    
    </>
    
  
  )
}




export default App
