import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAddresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: props.value,
    };
    this.handleChange = props.onChange;
  }

  render() {
    const { disable, addresses } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="addresses">UK Postcodes</label>
        <textarea
          ref="addresses"
          className="form-control"
          id="addresses"
          value={addresses}
          rows="5"
          disabled={disable}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

InputAddresses.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputAddresses;
