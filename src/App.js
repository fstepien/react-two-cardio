import React, { Component, Fragment, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "./Utilities";
import { Modal } from "./Elements";
import User from "./User";
import { UserContext } from "./UserContext";

class UserProvider extends Component {
  state = {
    id: "123",
    name: "Filip",
    email: "contact@filipstepien.com"
  };
  render() {
    return (
      <UserContext.Provider value={{ user: this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Email My Results</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Email My Results</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
