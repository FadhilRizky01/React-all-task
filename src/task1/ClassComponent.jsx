import React, { Component } from "react";

class ClassComponent extends Component {
  state = {
    message: "Hello World",
  };

  render() {
    return (
      <div>
        <h3>halo {this.props.name} Komponen ini dibuat dengan Class komponen</h3>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default ClassComponent;
