
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Landing from './sections/Landing';
import ResponsiveAppBar from './components/NavBar'
import NotFound from './sections/NotFound';
import Portfolio from './sections/Portfolio';
import Bio from './sections/Bio';
import Perfil from './sections/Perfil';
import Home from './sections/Home';




const App = () => {
  return(
    
    
    
    <>
    <ResponsiveAppBar />
    
    <Routes >
    <Route path="/" element={<Landing />} />
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
