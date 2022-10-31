import * as React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

import About from "./About";
import User from "./User";
import Donate from "./Donate";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import AboutNested from "./AboutNested";
import ErrorBound from "./ErrorBound";

const App = () => {
  return (
    <ErrorBound>
      <div className="app">
        <div className="nav-compo-div container">
          <Navbar />
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="more" element={<AboutNested />} />
            </Route>
            <Route path="/user" element={<User />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ErrorBound>
  );
};

export default App;
