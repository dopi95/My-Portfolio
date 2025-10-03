// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonals from './components/Testimonals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/Dashboard/auth/AdminLogin';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Expertises from './components/Expertises';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Main />
            <About />
            <Education />
            <Projects />
            <Skill />
            <Expertises />
            <Testimonals />
            <Contact />
            <Footer />
            <ScrollToTop />
            <FloatingContact />
          </>
        }
      />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
