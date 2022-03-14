import React,{useState, useEffect} from "react";
import './App.css';
import Marketplace from "./pages/Marketplace/Marketplace.jsx";
import MyAPI from "./pages/MyAPIs/MyAPI.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import BgRemoverAppHome from "./pages/background-remover-home/background-remover-home.jsx";
import Axios from "axios";

function App() {
    const [apiList,setApiList] = useState([]);

    useEffect(()=>{
      Axios.get("/crud/read").then((response)=>{
          setApiList(response.data);
  });
  });

  return (
<Router>
<Routes>
<Route path="/" element={<Marketplace apiList={apiList} />} />
<Route path="/login" element={<Dashboard />} />
<Route path="/BgRemoverAppHome" element={<BgRemoverAppHome />} />
<Route path="/MyAPI" element={<MyAPI apiList={apiList} />} />
</Routes>
</Router>
  );
}

export default App;
