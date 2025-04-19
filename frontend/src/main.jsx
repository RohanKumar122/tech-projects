import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Pending from './components/Pending.jsx';

// Pages for routing
const Home = () => <div><App/></div>;
const About = () => <div><App/></div>;
const Blog = () => <div><App/></div>;
const ContactUs = () => <div><App/></div>;

// Layout Component
export const AppLayout = () => {
  return (
    <div className="bg-red">
      <Navbar />   
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pending" element={<Pending />} />
        </Routes>
      </div>
    </div>
  );
};

// Render React App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </React.StrictMode>
);
