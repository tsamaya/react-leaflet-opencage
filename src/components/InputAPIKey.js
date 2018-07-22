import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAPIKey extends Component {
  constructor(props) {
    super(props);
    this.handleChange = props.onChange;
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="apikey">API KEY</label>
        <input
          type="text"
          className="form-control"
          id="apikey"
          placeholder="1234567890"
          onChange={this.handleChange}
        />
        <small className="form-text text-muted">
          Your OpenCage Data API Key.
        </small>
      </div>
    );
  }
}

InputAPIKey.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputAPIKey;
