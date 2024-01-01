import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./CommonElements/Navbar";
import HomePage from "./HomePage/HomePage.jsx";
import Footer from "./CommonElements/Footer.jsx";

import ComingSoonPage from "./CommonElements/ComingSoonPage";

import "./App.css";

function App() {
  return (
    <>
      <div className="pre-loader">
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
        <div>
          <h1 className="typewriter">Apriori is loading...</h1>
        </div>
      </div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Events" element={<ComingSoonPage />} />
          <Route path="Sponsors" element={<ComingSoonPage />} />
          <Route path="Team" element={<ComingSoonPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Helmet>
        <script src="src/ElementReveal.js" type="module" />
        <script src="src/Preloader.js" type="module" />
      </Helmet>
    </>
  );
}

export default App;
