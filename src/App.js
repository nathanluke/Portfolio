import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Sidedrawer from "./components/layout/Navbar/Slidedrawer/Sidedrawer";
import Backdrop from "./components/backdrop/backdrop";
import Home from "./components/layout/Navbar/Pages/home";
import Testamonials from "./components/layout/Navbar/Pages/Testamonials";
import contact from "./components/layout/Navbar/Pages/Contact"

class App extends Component {
  state = {
  sideDrawerOpen:  false
};

    toggleclickhandler = () => {
    this.setState((prevState) => {
      return {sidedrawerOpen: !prevState.SidedrawerOpen}
    });
  }
render() {
  let sidedrawer = null
  let backdrop = null

  if (this.state.SidedrawerOpen) {
    sidedrawer = <Sidedrawer />
    backdrop = <Backdrop />

  }
    return (
      <Router>
        <div className="App" style={{height: "100%"}}>
          <Navbar drawerclickhandle = {this.toggleclickhandler} />
          {sidedrawer}
          {backdrop}
  
  
          <div style={{marginTop: '100px'}}>
            <Switch>
              <Route path="/Home"  exact component={Home} />
              <Route path="/Testamonials" component={Testamonials} />
              <Route path="/contact" component={contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );

  }
}

export default App;
