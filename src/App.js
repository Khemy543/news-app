import React from 'react'
import { Routes, Route } from "react-router-dom";
import DefaulLayout from './layouts/DefaultLayout';
import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/*" element={<DefaulLayout />} />
    </Routes>
  );
}

export default App;
