// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import HomeDashBoard from "./pages/DashBoard_pages/MyDashBoard";
import AddSales from "./pages/DashBoard_pages/AddSales";
import LoginScreen from "./pages/login";
import Register from "./pages/register";
import RegisterBusiness from "./pages/RegisterBusiness";
import Profile from "./pages/profile";
import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route as the default */}
        <Route path="/" element={<Home />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/MyDashBoard" element={<HomeDashBoard />} />
            <Route path="/AddSales" element={<AddSales />} />
          </Route>
        </Route>

        {/* Public routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/RegisterBusiness" element={<RegisterBusiness />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
