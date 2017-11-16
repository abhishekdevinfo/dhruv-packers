import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import dhrTheme from "./dhrTheme";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  // handleClose = () => this.setState({ open: !this.state.open });
  // //     No need for bind

  handleClose() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(dhrTheme)}>
          <div className="App">
            <AppBar
              title="Dhruv Packers"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer
              docked={false}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <NavLink to="/">
                <MenuItem primaryText="Home" onClick={this.handleClose} />
              </NavLink>
              <NavLink to="/products">
                <MenuItem onClick={this.handleClose}>Products</MenuItem>
              </NavLink>
              <NavLink to="/services">
                <MenuItem onClick={this.handleClose}>Services</MenuItem>
              </NavLink>
              <NavLink to="/aboutUs">
                <MenuItem onClick={this.handleClose}>About Us</MenuItem>
              </NavLink>
            </Drawer>

            <Route exact path="/" render={() => <h1>Home View</h1>} />
            <Route
              exact
              path="/products"
              render={() => <h1>Products View</h1>}
            />
            <Route
              exact
              path="/services"
              render={() => <h1>Services View</h1>}
            />
            <Route
              exact
              path="/aboutUs"
              render={() => <h1>About Us View</h1>}
            />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
