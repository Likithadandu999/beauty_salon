import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Packages from './pages/Packages';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/services" element={<Services/>} />

        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/packages" element={<Packages/>}
/>

        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />
    </Routes>
    <Footer/>
     </BrowserRouter>
  );
}

export default App;
