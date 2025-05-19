import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./chatBot/ChatBot";
// pages
import WorkPage from "./pages/WorkPage";
import Home from "./pages/Home";
import YourPlan from "./pages/YourPlan";
import Certifications from "./pages/Certifications";

const App = () => {
  return (
    <Router>
      <div className="siteImage bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WorkPage" element={<WorkPage />} />
          <Route path="/YourPlan" element={<YourPlan />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
