import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Counter from './components/Counter';
import Project1 from './components/Project1'; //
import Members from './components/Members';
import Projects from './components/Projects';
import About from './components/About';
import Reviews from './components/Reviews';
import PhotoScroll from './components/PhotoScroll';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import LoadingAnimation from './components/LoadingAnimation';
import AttendanceForm from './components/AttendanceForm';

import AllMembers from './pages/AllMembers';
import CoreMembers from './pages/CoreMembers.tsx';
import AllProjects from './pages/AllProjects';
import Story from './pages/Story';
import Donation from './pages/Donation.tsx';
import ProjectDetails from './pages/ProjectDetails'; // Manaranjan-Sukh Niketan


import ScrollToAnchor from "./components/ScrollToAnchor"

function Home() {
  return (
    <main>
      <Hero />
      <Counter />
      <Members />
      <Project1 />
      <Projects />

      <About />
      <AttendanceForm />
      <Reviews />
      <PhotoScroll />
      <Testimonials />
      <Footer />
      <FloatingSocial />
    </main>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Router>
      <div className="bg-black text-white font-serif min-h-screen">
        {/* Shared header on all pages */}
        <Header />
        {/* Hash scroll handler */}
        <ScrollToAnchor />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Optional dedicated About page if needed */}
          <Route path="/about" element={<About />} />

          {/* Additional Pages */}
          <Route path="/members" element={<AllMembers />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/core-members" element={<CoreMembers />} />
          <Route path="/story" element={<Story />} />

          {/* donation routes - support both /donation and /donate */}
          <Route path="/donation" element={<Donation />} />
          <Route path="/donate" element={<Donation />} />

          {/* Manaranjan-Sukh Niketan */}
          <Route path="/project-details" element={<ProjectDetails />} />

          {/* other routes */}
          {/* <Route path="/blood-donor" element={<BloodDonorForm />} />
          <Route path="/blood-donor-results" element={<BloodDonorResults />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
