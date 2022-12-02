import React, { Component } from "react";
import Class2 from "./Class2";
class Class1 extends Component {
  render() {
    return (
      <div>
        <Class2>
          <h2>This is heading 2 with class component</h2>
        </Class2>
      </div>
    );
  }
}

export default Class1;
