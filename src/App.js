import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";

export const Routes = {
  HOME: "/",
  ABOUT: "/about",
};

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path={Routes.ABOUT} component={AboutPage} />
          <Route path={Routes.HOME} component={HomePage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
