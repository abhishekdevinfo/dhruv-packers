import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import SideBarItem from './SideBarItem'

/*
  Add your nav links here..
    isExact: if true it will be an exact path
    linkTo: the path you want to go
    text: title of the nav item
*/

const links = [
  { isExact: true, linkTo: "/", text: "Home" },
  { isExact: false, linkTo: "/logos", text: "Products" },
  { isExact: false, linkTo: "/posters", text: "Services" },
  { isExact: false, linkTo: "/letterhead", text: "About Us" }
];

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="Dhruv Packers"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          {links.map((link, i) => {
            return (
              <SideBarItem
                isExact={link.isExact}
                linkTo={link.linkTo}
                primaryText={link.text}
                handleClose={this.handleClose}
                key={i}
              />
            );
          })}
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
