import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";

import ConflictHome2 from "./pages/conflict/ConflictHome2";

import ClimateMigrationMap from "./pages/climatemigration/ClimateMigrationMap";
import ClimateMigrationSubmit from "./pages/climatemigration/ClimateMigrationSubmit";
import ClimateMigrationFacts from "./pages/climatemigration/ClimateMigrationFacts";
import ClimateMigrationAdmin from "./pages/climatemigration/ClimateMigrationAdmin";

import "./App.css";
import "./index.css";
import "./scss/custom.scss";
// import NotFound from './components/NotFound';

//++++++++++++ Routes ++++++++++++++++++++++
function App() {
  return (
    <div className="App">
      <div className="wrapper">
     {/* <Logo /> */}
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} >
            <Home />
            {/* <Route component={Home} path="/home" /> */}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
            {/* Climate Migration */}
            <Route path="/ClimateMigration/Map">
              <ClimateMigrationMap />
            </Route>
            <Route path="/ClimateMigration/Facts">
              <ClimateMigrationFacts />
            </Route>
            <Route path="/ClimateMigration/Submit">
              <ClimateMigrationSubmit />
            </Route>
            {/* <Route path="/ClimateMigration/Stories/:id">
              <ClimateMigrationStories />
            </Route> */}
            {/* <Route path="/ClimateMigration/Stories">
              <ClimateMigrationStories />
            </Route> */}
            <Route path="/ClimateMigration/Admin13">
              <ClimateMigrationAdmin />
            </Route>
            {/* <Route path="/ClimateMigration">
              <ClimateMigrationHome />
            </Route> */}
            {/* Conflicts */}
            {/* <Route path="/Conflicts2">
              <ConflictHome />
            </Route> */}
            <Route path="/Conflicts">
              <ConflictHome2 />
            </Route>
            <Route component={Home} path="/home" />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
