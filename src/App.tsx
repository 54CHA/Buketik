import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FlowerCatalog } from './components/FlowerCatalog';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloralPattern } from './components/DecorativeElements';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="min-h-screen relative">
            <FloralPattern />
            <Header />
            <main className="relative">
              <Hero />
              <FlowerCatalog />
              <Features />
              <Testimonials />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;