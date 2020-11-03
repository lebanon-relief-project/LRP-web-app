import "./App.css";
import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import HelpPage from "./pages/helpPage";
import { Burger } from "./components";

export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  HELP: "/help",
};

export const Pages = () => {
  return (
    <>
      <Switch>
        <Route path={Routes.ABOUT} component={AboutPage} />
        <Route path={Routes.HELP} component={HelpPage} />
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
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
        </div>

        <Navbar open={open} setOpen={setOpen} />

        <Pages />
      </Router>
      <Footer />
    </>
  );
};

export default App;
