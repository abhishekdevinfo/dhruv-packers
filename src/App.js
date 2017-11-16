import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

/* Material-UI */
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import dhrTheme from "./dhrTheme";

import SideNav from "./SideNav";

/* Import Views */
import Home from "./views/Home";
import Products from "./views/Products";
import Services from "./views/Services";
import AboutUS from "./views/AboutUs";
import NotFound from "./views/NotFound"

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(dhrTheme)}>
          <div className="App">
            <SideNav />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/services" component={Services} />
              <Route path="/about-us" component={AboutUS} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
