import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Home from "./pages/Home/Home";
import Reservation from "./pages/Reservation/Reservation";
import Room from "./pages/Room/Room";
import Recommend from "./pages/Recommend/Recommend";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-M59VCMPW",
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/room" element={<Room />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
