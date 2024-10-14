import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './components/LanguageContext';


function App() {
  
  
  return (
    <LanguageProvider>
      <Router>
        <div className="contenedor-principal">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="*" element={<NotFound />} />         
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
