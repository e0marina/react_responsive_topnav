import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  xClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let x;
    if (this.state.sideDrawerOpen) {
      x = <x click={this.xClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.xClickHandler}
        />

        <main style={{ marginTop: "64px" }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
