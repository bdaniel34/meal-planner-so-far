import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
 
import Mainfile from "./components/Mainfile";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Search from "./components/Search";
 
export default function Appp() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<App />} />
 
        <Route path="/Mainfile" element={<Mainfile />} />
        <Route path="/search" element={<Search />} />
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Appp />, document.getElementById("root"));

reportWebVitals();
