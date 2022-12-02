import React, { Component } from "react";

export class Class2 extends Component {
  render() {
    const {children}=this.props;
    return <div>{children}</div>;
  }
}

export default Class2;
