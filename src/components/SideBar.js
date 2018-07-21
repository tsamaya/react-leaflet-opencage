import React, { Component } from "react";
import InputAPIKey from "./InputAPIKey";
import InputAddresses from "./InputAddresses";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <form>
          <InputAPIKey />
          <InputAddresses />
        </form>
      </div>
    );
  }
}
export default SideBar;
