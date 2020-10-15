import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import HelpPage from "./pages/helpPage";

export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  HELP: "/help"
};

export const Pages = () => {
  return (
    <>
      <Switch>
        <Route path={Routes.ABOUT} component={AboutPage} />
        <Route path={Routes.HOME} component={HomePage} />
        <Route path={Routes.HELP} component={HelpPage} />
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Pages />
      </Router>
      <Footer />
    </>
  );
};

export default App;
