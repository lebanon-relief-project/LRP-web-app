import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
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
import HelpPage from "./pages/helpPage";
import MobileNavbar from "./components/MobileNavBar";
import ResultsPage from "./pages/resultsPage";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  HELP: "/help",
  RESULTS: "/results",
};

export const Pages = () => {
  return (
    <>
      <Switch>
        <Route path={Routes.ABOUT} component={AboutPage} />
        <Route path={Routes.HELP} component={HelpPage} />
        <Route path={Routes.RESULTS} component={ResultsPage} />
        <Route path={Routes.HOME} component={HomePage} />
      </Switch>
    </>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Router>
        <ScrollToTop />
        <div ref={node}>
          <MobileNavbar open={open} setOpen={setOpen} />
        </div>
        <Navbar open={open} setOpen={setOpen} />
        <Pages />
      </Router>
      <Footer />
    </>
  );
};

export default App;
