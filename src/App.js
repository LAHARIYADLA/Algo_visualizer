import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Searching from "./screens/Searching";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sorting from "./screens/Sorting";
import Paths from "./screens/Paths";
function App() {
  return (
    <div className="min-h-[100vh] bg-background">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Searching />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/paths" element={<Paths />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
