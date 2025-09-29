import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*______________
|   LANDING   */
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Background from "./components/Background/Background";
import Proyectos from "./components/Proyectos/Proyectos";
import Tecnologies from "./components/Tecnologies/Tecnologies";

/*__________________
|   JOB DETAILS   */
import JobDetailsInte from "./components/Background/components/JobDetailsInte";
import JobDetailsIbc from "./components/Background/components/JobDetailsIbc";
import JobDetailsDazlabs from "./components/Background/components/JobDetailsDazlabs";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Background />
                  <Proyectos />
                  {/* <Tecnologies /> */}
                </>
              }
            />
            <Route path="/experience/inteligenio" element={<JobDetailsInte />} />
            <Route path="/experience/ibc-institute" element={<JobDetailsIbc />} />
            <Route path="/experience/dazlabs" element={<JobDetailsDazlabs/> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
