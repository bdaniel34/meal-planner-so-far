import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from "./reportWebVitals";
import Header from "./App";
import Folder from "./components/folder";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
