
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Index from './sections/Index';
import Nosotros from './sections/Home';
import Blog from './sections/Blog';
import Products from './sections/Products';
import ResponsiveAppBar from './components/NavBar'
import NotFound from './sections/NotFound';


const App = () => {
  return(
    <>
    <ResponsiveAppBar />
    
    <Routes >
    <Route path="/" element={<Index />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="blog" element={<Blog />} />
      <Route path="products" element={<Products />} />
      <Route component={NotFound} />
    </Routes>
    
    </>
    
  
  )
}




export default App
