import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop' // ✅ nuevo

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <ScrollToTop /> {/* ✅ nuevo */}
        <Navbar />
        <main className="w-full max-w-[1920px] mx-auto">
          <Routes>
            <Route path="/REFORMAS" element={<Home />} />           
            <Route path="/servicios" element={<Services />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
