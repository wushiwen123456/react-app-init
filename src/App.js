import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.scss";
// 引用组件
import Home from "./views/Home";
import About from "./views/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="text">
        <HashRouter>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={About} path="/about" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
