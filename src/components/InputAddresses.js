import React, { Component } from "react";

class InputAddresses extends Component {
  render() {
    return (
          <div className="form-group">
            <label htmlFor="addresses">Addresses</label>
            <textarea className="form-control" id="addresses" rows="5" />
          </div>
    );
  }
}
export default InputAddresses;
