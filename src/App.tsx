import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Boutique from './pages/Boutique';
import Realizations from './pages/Realizations';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="boutique" element={<Boutique />} />
          <Route path="realisations" element={<Realizations />} />
          <Route path="blog" element={<Blog />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<div className="pt-32 text-center">Page en construction</div>} />
        </Route>
      </Routes>
    </Router>
  );
}