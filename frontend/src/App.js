import React from "react";
import './App.css';
import Marketplace from "./pages/Marketplace/Marketplace.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import BgRemoverAppHome from "./pages/background-remover-home/background-remover-home.jsx";



function App() {
  return (
<Router>
<Routes>
<Route path="/" element={<Marketplace />} />
<Route path="/login" element={<Dashboard />} />
<Route path="/BgRemoverAppHome" element={<BgRemoverAppHome />} />
</Routes>
</Router>
  );
}

export default App;
