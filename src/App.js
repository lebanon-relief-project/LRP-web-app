import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";

export const Routes = {
  HOME: "/",
  ABOUT: "/about",
};

export const Pages = () => {
  return (
    <>
      <Switch>
        <Route path={Routes.ABOUT} component={AboutPage} />
        <Route path={Routes.HOME} component={HomePage} />
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
