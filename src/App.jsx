import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
  
  
  return (
    <Router>
      <div className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="*" element={<NotFound />} />         
        </Routes>
      </div>
    </Router>
  )
}

export default App
