import React, { Component } from "react";
import "./aaa.scss";
import { Button } from "antd";
class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
     <div className="home">
       <div className="home-con">
       <h1>Hello world!</h1>
       <Button>Welcome</Button>
       </div>
     </div>
    );
  }
}

export default Home;
