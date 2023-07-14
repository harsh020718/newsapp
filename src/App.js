import "./App.css";
import Navbar from "./components/Navbar";

import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pagesize = 10;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pagesize={pagesize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pagesize={pagesize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pagesize={pagesize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pagesize={pagesize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pagesize={pagesize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pagesize={pagesize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pagesize={pagesize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
        {/* // humne key ko forced remount karne k liye diya hai */}
      </Router>
    </div>
  );
};
export default App;
