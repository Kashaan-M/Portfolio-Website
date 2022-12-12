import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Loading from './components/Loading';
const Certificates = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const Stack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Error = lazy(() => import('./components/Error'));
// dynamic importing components

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route
          path='/certifications'
          element={
            <Suspense fallback={<Loading />}>
              <Certificates />
            </Suspense>
          }
        />
        <Route
          path='/projects'
          element={
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path='/stack'
          element={
            <Suspense fallback={<Loading />}>
              <Stack />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path='/success'
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
