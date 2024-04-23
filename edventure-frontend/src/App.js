import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/Application';
import NavBar from './components/NavBar';
import AdminDashboard from './components/AdminDashboard';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Application form- Campus Lead</h1>
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
