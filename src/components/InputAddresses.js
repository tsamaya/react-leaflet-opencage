import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAddresses extends Component {
  constructor(props) {
    super(props);
    this.handleChange = props.onChange;
  }

  render() {
    const { disable } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="addresses">UK Postcodes</label>
        <textarea
          ref="addresses"
          className="form-control"
          id="addresses"
          rows="5"
          disabled={disable}
          onChange={this.handleChange}
        />
        <small className="form-text text-muted">
          One UK Postcode per line.
        </small>
      </div>
    );
  }
}

InputAddresses.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputAddresses;
