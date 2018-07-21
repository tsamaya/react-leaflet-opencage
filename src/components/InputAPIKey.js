import React, { Component } from "react";

class InputAPIKey extends Component {
  render() {
    return (
          <div className="form-group">
            <label htmlFor="apikey">API KEY</label>
            <input
              type="text"
              className="form-control"
              id="apikey"
              placeholder="1234567890"
            />
            <small className="form-text text-muted">
              Your OpenCage Data API Key
            </small>
          </div>
    );
  }
}
export default InputAPIKey;
