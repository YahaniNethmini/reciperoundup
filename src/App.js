import React from "react";
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from './Screens/FirstPage';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/firstpage" element={<FirstPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
